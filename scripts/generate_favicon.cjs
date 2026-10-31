const fs = require('fs');
const path = require('path');

const photoPath = path.resolve(__dirname, '..', 'public', 'vedika-photo.jpg');
const base64 = fs.readFileSync(photoPath).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <clipPath id="circleView">
      <circle cx="64" cy="64" r="58" />
    </clipPath>
    <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="50%" stop-color="#2dd4bf" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>
  </defs>
  <circle cx="64" cy="64" r="63" fill="url(#ring)" />
  <circle cx="64" cy="64" r="59" fill="#090d16" />
  <image href="data:image/jpeg;base64,${base64}" x="6" y="6" width="116" height="116" clip-path="url(#circleView)" preserveAspectRatio="xMidYMid slice" />
  <circle cx="104" cy="104" r="13" fill="#10b981" stroke="#090d16" stroke-width="3" />
</svg>`;

const pubSvg = path.resolve(__dirname, '..', 'public', 'favicon.svg');
const distSvg = path.resolve(__dirname, '..', 'dist', 'favicon.svg');

fs.writeFileSync(pubSvg, svg);
if (fs.existsSync(path.resolve(__dirname, '..', 'dist'))) {
  fs.writeFileSync(distSvg, svg);
}

console.log('Successfully generated photo favicon.svg');
