# Morse Code Multiplayer - Quick Start Guide

Everything is set up and ready to go! Here's how to use it:

## Starting the Server

### Option 1: Double-click (easiest)
1. Find `start-morse-server.command` in your Claude folder
2. Double-click it
3. A terminal window will open showing the server is running

### Option 2: Terminal
1. Open Terminal
2. Navigate to your Claude folder: `cd ~/Documents/Claude`
3. Run: `node morse-server.js`

You should see:
```
Morse Code WebSocket Server running on port 8080
```

**Keep this terminal window open while using the app!**

## Using the Morse Code Trainer

1. **Start the server** (using one of the methods above)

2. **Open the HTML file**
   - Navigate to `morse-code-trainer copy.html` in Finder
   - Right-click → Open With → your web browser
   - OR just double-click it

3. **Check connection**
   - Look at the bottom of the page
   - You should see "ONLINE USERS: ONLINE" in green
   - If it says "OFFLINE" in red, make sure the server is running

4. **Test multiplayer**
   - Open the same HTML file in another browser window
   - You should see the other user appear in the "ONLINE USERS" section
   - Press and hold SPACE in one window
   - You should hear the tone in both windows!

## How to Use

### Practice Mode
- Press and hold SPACE to transmit morse code
- Short press = dot (.)
- Long press = dash (-)
- The decoder will automatically translate your morse code

### Playback Mode
- Type any text in the input box
- Click PLAY to hear it as morse code

### Multiplayer
- When others are online, you'll see them listed at the bottom
- When they transmit, their badge will pulse yellow
- You'll hear their morse code with a slightly different pitch
- Each user gets a unique frequency so you can tell who's who

## Stopping the Server

When you're done:
1. Go to the terminal window running the server
2. Press `Ctrl+C`
3. The server will shut down

## Troubleshooting

**Problem:** Says "OFFLINE" even though server is running
- **Solution:** Refresh the web page

**Problem:** Can't hear other users
- **Solution:** Make sure your volume is up and check browser permissions for audio

**Problem:** Port 8080 already in use
- **Solution:** Something else is using that port. Close other programs or change the port in both `morse-server.js` and the HTML file

**Problem:** Server won't start
- **Solution:** Make sure Node.js is installed (`node --version` should show a version number)

## Sharing with Others on Your Network

If you want friends on the same WiFi to join:

1. Find your IP address:
   - Open System Preferences → Network
   - Look for your IP (something like 192.168.1.x)

2. Edit `morse-code-trainer copy.html`:
   - Open in a text editor
   - Find line 829: `const wsUrl = 'ws://localhost:8080';`
   - Change to: `const wsUrl = 'ws://YOUR_IP_ADDRESS:8080';`
   - Example: `const wsUrl = 'ws://192.168.1.100:8080';`

3. Share the HTML file with friends
   - They open it in their browser
   - They should connect to your server automatically

Enjoy your multiplayer morse code trainer!
