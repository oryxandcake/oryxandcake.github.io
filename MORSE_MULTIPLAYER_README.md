# Morse Code Trainer - Multiplayer Setup

This morse code trainer now has multiplayer functionality! When multiple people open the app at the same time, they can hear each other's morse code transmissions in real-time.

## Features

- **Real-time multiplayer**: See who else is online and hear their morse code
- **Visual indicators**: Online users are shown with badges that pulse when they're transmitting
- **Unique tones**: Each user has a slightly different frequency so you can distinguish between them
- **Auto-reconnect**: If the server goes down, the app will automatically try to reconnect

## Setup Instructions

### 1. Install Node.js
If you don't have Node.js installed, download it from https://nodejs.org/

### 2. Install Server Dependencies
Open a terminal in the folder containing the morse code files and run:

```bash
npm install --prefix . ws
```

Or if you want to use the package.json file:
```bash
cp morse-package.json package.json
npm install
```

### 3. Start the Server
Run the WebSocket server:

```bash
node morse-server.js
```

You should see:
```
Morse Code WebSocket Server running on port 8080
```

### 4. Open the HTML File
Open `morse-code-trainer copy.html` in multiple browser windows or share it with friends on your local network.

## How It Works

### Client (HTML file)
- Connects to WebSocket server at `ws://localhost:8080`
- Broadcasts when you start/stop transmitting morse code
- Receives broadcasts from other users and plays their tones
- Shows online users with visual indicators

### Server (morse-server.js)
- Listens on port 8080 for WebSocket connections
- Maintains a list of connected users
- Broadcasts transmission events to all connected clients
- Handles user join/leave events

## Offline Mode

If the server isn't running, the app works in offline mode. You can still:
- Practice morse code
- Use the decoder
- Play back text as morse code

The "ONLINE USERS" section will show "OFFLINE" status.

## Network Setup (Optional)

To allow others on your network to connect:

1. Find your local IP address:
   - Mac: System Preferences → Network
   - Windows: `ipconfig` in command prompt
   - Linux: `ifconfig` or `ip addr`

2. Update the WebSocket URL in the HTML file (line ~828):
   ```javascript
   const wsUrl = 'ws://YOUR_IP_ADDRESS:8080';
   ```

3. Make sure port 8080 is allowed through your firewall

4. Share the HTML file with others and have them open it

## Troubleshooting

**Connection shows OFFLINE:**
- Make sure the server is running (`node morse-server.js`)
- Check that nothing else is using port 8080
- Try refreshing the page

**Can't hear other users:**
- Make sure your volume is up
- Check browser console for errors (F12)
- Verify other users are actually transmitting (their badge should pulse yellow)

**Server crashes:**
- Check if port 8080 is already in use
- Make sure Node.js and the `ws` package are installed
- Look at error messages in the terminal

## Customization

You can customize the experience by editing the HTML file:

- **User frequency offset** (line ~890): Change how different each user sounds
- **Remote tone volume** (line ~889): Adjust volume of other users' tones
- **WebSocket URL** (line ~828): Point to a different server
- **Reconnect delay** (line ~848): How long to wait before reconnecting

Enjoy your multiplayer morse code experience!
