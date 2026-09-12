/* Words Quest offline cache.
   Bump CACHE when the game changes so phones pick up the new version. */
var CACHE = "wordquest-v6";
var FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){ return c.addAll(FILES); })
          .then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function(){
      return self.clients.claim();
    }).then(function(){
      /* A page showing the old version is now out of date. Reload it here rather
         than asking it to reload itself: the stale page is old code that knows
         nothing about this message, which is how a phone could sit on an old
         copy of the game indefinitely. */
      return self.clients.matchAll({ type:"window" }).then(function(list){
        list.forEach(function(c){
          c.postMessage({ type:"new-version" });
          if(typeof c.navigate === "function"){
            try{ c.navigate(c.url); }catch(err){}
          }
        });
      });
    })
  );
});

function keepCopy(req, res){
  if(res && res.status === 200 && res.type === "basic"){
    var copy = res.clone();
    caches.open(CACHE).then(function(c){ c.put(req, copy); });
  }
  return res;
}

self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  var url = new URL(e.request.url);
  var isPage = e.request.mode === "navigate" ||
               url.pathname.slice(-1) === "/" ||
               /\.(html|js|webmanifest)$/.test(url.pathname);

  if(isPage){
    /* The game itself: take the newest version whenever there is a connection,
       and fall back to the cache so it still plays with none. Serving the cache
       first here meant new words never reached a phone that had played before. */
    e.respondWith(
      fetch(e.request)
        .then(function(res){ return keepCopy(e.request, res); })
        .catch(function(){
          return caches.match(e.request).then(function(hit){
            return hit || caches.match("./index.html");
          });
        })
    );
    return;
  }

  /* Pictures never change, so the cache is the fastest right answer. */
  e.respondWith(
    caches.match(e.request).then(function(hit){
      return hit || fetch(e.request).then(function(res){ return keepCopy(e.request, res); });
    })
  );
});
