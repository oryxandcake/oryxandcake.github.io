# Setting Up Morse Code Server on Render (Free!)

Render.com offers free hosting for WebSocket servers. Here's how to set it up:

## Step 1: Create a Render Account

1. Go to https://render.com
2. Click "Get Started" or "Sign Up"
3. Choose "Sign up with GitHub" (easiest)
4. Authorize Render to access your GitHub

## Step 2: Create a Web Service

1. Once logged in, click "New +" in the top right
2. Select "Web Service"
3. Click "Build and deploy from a Git repository"
4. Click "Next"

## Step 3: Connect Your Repository

1. Find your repository: `oryxandcake/chris`
2. Click "Connect"
3. If you don't see it, click "Configure account" to grant access

## Step 4: Configure the Service

Fill in these settings:

- **Name**: `morse-code-server` (or anything you want)
- **Region**: Choose closest to you
- **Branch**: `main`
- **Root Directory**: Leave blank
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `node morse-server.js`
- **Instance Type**: Select **"Free"** (important!)

## Step 5: Add Environment Variable (Optional but recommended)

Under "Environment Variables":
- Click "Add Environment Variable"
- Key: `PORT`
- Value: `10000`

(Render automatically provides PORT, but this ensures it works)

## Step 6: Deploy

1. Scroll down and click "Create Web Service"
2. Wait for deployment (5-10 minutes first time)
3. Watch the logs - you should see "Morse Code WebSocket Server running on port..."

## Step 7: Get Your Server URL

Once deployed, you'll see your service URL at the top. It will be something like:

`https://morse-code-server-xxxx.onrender.com`

For WebSocket, use: `wss://morse-code-server-xxxx.onrender.com`

**Important Notes:**
- Use `wss://` (secure WebSocket), not `ws://`
- Don't include port number in the URL
- The free tier sleeps after 15 min of inactivity
- First request after sleep takes ~30 seconds to wake up

## Step 8: Update Your HTML

Tell me your Render URL and I'll update the HTML file automatically!

Or manually change line 829 in `morse-code-trainer copy.html`:

From:
```javascript
const wsUrl = 'ws://localhost:8080';
```

To:
```javascript
const wsUrl = 'wss://YOUR-APP-NAME.onrender.com';
```

## Troubleshooting

**Deployment fails:**
- Check the logs in Render dashboard
- Make sure `morse-server.js` and `morse-package.json` are in your GitHub repo
- Verify the build command is `npm install`

**Can't connect:**
- Make sure you're using `wss://` not `ws://`
- Check that your service is "Live" (green) in Render dashboard
- If it says "Sleeping", visit the URL once to wake it up

**Service keeps sleeping:**
- This is normal for free tier
- It wakes up automatically when someone connects
- First connection takes ~30 seconds after sleep

## Free Tier Limits

- 750 hours/month (plenty for this use case)
- Sleeps after 15 minutes of inactivity
- Wakes up automatically on first request
- Perfect for a morse code trainer!

Once set up, anyone can use your multiplayer morse code trainer 24/7 for free!
