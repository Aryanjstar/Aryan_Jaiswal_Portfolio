#!/bin/bash

# Azure App Service startup script for Next.js application
echo "Starting Next.js Portfolio Application on Azure App Service"

# Set environment variables
export NODE_ENV=production
export PORT=${PORT:-8080}
export WEBSITE_NODE_DEFAULT_VERSION=${WEBSITE_NODE_DEFAULT_VERSION:-20-lts}

# Display Node.js and npm versions
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"
echo "Starting on port: $PORT"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the application if .next doesn't exist
if [ ! -d ".next" ]; then
    echo "Building Next.js application..."
    npm run build
fi

# Start the application
echo "Starting Next.js application..."
exec npm start 