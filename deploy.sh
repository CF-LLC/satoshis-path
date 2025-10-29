#!/bin/bash

# GitHub Pages Deployment Script for Satoshi's Path
# This script builds the app and prepares it for GitHub Pages deployment

echo "🚀 Starting GitHub Pages deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the project root."
    exit 1
fi

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf out

# Install dependencies (in case they're missing)
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building the application..."
npm run build

# Add .nojekyll file for GitHub Pages
echo "📝 Adding .nojekyll file..."
touch out/.nojekyll

# Check if build was successful
if [ -d "out" ] && [ -f "out/index.html" ]; then
    echo "✅ Build successful! The app is ready for GitHub Pages deployment."
    echo ""
    echo "📋 Next steps:"
    echo "1. Push your changes to the main branch"
    echo "2. GitHub Actions will automatically deploy to GitHub Pages"
    echo "3. Your site will be available at: https://cf-llc.github.io/satoshis-path/"
    echo ""
    echo "📊 Build summary:"
    echo "   - Total files in out/: $(find out -type f | wc -l)"
    echo "   - Main pages: $(find out -name "index.html" | wc -l)"
    echo "   - Static assets: $(find out/_next -type f 2>/dev/null | wc -l)"
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi