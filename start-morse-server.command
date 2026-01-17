#!/bin/bash
cd "$(dirname "$0")"
echo "Starting Morse Code Multiplayer Server..."
echo "=========================================="
echo ""
echo "Server will run on: ws://localhost:8080"
echo ""
echo "To stop the server, press Ctrl+C"
echo ""
node morse-server.js
