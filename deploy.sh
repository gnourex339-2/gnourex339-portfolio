#!/bin/bash
# ─────────────────────────────────────────────
# Deploy script — amine-portfolio → GitHub Pages
# Usage: ./deploy.sh YOUR_GITHUB_USERNAME
# ─────────────────────────────────────────────

USERNAME=${1:-"TON_USERNAME"}
REPO="gnourex339-portfolio"

echo "🔧 Updating homepage in package.json..."
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json'));
pkg.homepage = 'https://${USERNAME}.github.io/${REPO}';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

echo "🔧 Updating vite.config.js base path..."
sed -i "s|base: '.*'|base: '/${REPO}/'|" vite.config.js

echo "📦 Building..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Done! Live at: https://${USERNAME}.github.io/${REPO}/"
