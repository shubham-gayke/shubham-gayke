const fs = require('fs');
const paths = require('./paths.json');

const config = {
  leetcode: {
    color: '#38bdf8',
    title: 'LeetCode',
    logo: paths.leetcode,
    animType: 'topToBottom',
    dur: '3s'
  },
  hackerrank: {
    color: '#5eead4',
    title: 'HackerRank',
    logo: paths.hackerrank,
    animType: 'leftToRight',
    dur: '3.5s'
  },
  devto: {
    color: '#ffffff',
    title: 'DEV.TO Community Member',
    logo: paths.devdotto,
    animType: 'bottomToTop',
    dur: '4s'
  },
  credly: {
    color: '#38bdf8',
    title: 'Credly',
    logo: paths.credly,
    animType: 'rightToLeft',
    dur: '4.5s'
  },
  mslearn: {
    color: '#22d3ee',
    title: 'Microsoft Learn',
    logo: paths.microsoft,
    animType: 'diagonal',
    dur: '3.2s'
  },
  awstalent: {
    color: '#f59e0b',
    title: 'AWS EMERGING TALENT',
    title2: 'COMMUNITY MEMBER',
    logo: paths.amazonwebservices,
    animType: 'pulseScanner',
    dur: '4s'
  },
  oracleedu: {
    color: '#ef4444',
    title: 'Oracle Edu',
    logo: paths.oracle,
    animType: 'doubleScan',
    dur: '3s'
  }
};

const getAnimation = (type, color, dur) => {
  if (type === 'topToBottom') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="0" y="0" width="340" height="4" fill="url(#scanGrad)" class="scanner">
      <animateTransform attributeName="transform" type="translate" from="0 -20" to="0 150" dur="${dur}" repeatCount="indefinite" />
    </rect>`;
  }
  if (type === 'leftToRight') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="0" y="0" width="4" height="130" fill="url(#scanGrad)" class="scanner">
      <animateTransform attributeName="transform" type="translate" from="-20 0" to="360 0" dur="${dur}" repeatCount="indefinite" />
    </rect>`;
  }
  if (type === 'bottomToTop') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="0" y="0" width="340" height="4" fill="url(#scanGrad)" class="scanner">
      <animateTransform attributeName="transform" type="translate" from="0 150" to="0 -20" dur="${dur}" repeatCount="indefinite" />
    </rect>`;
  }
  if (type === 'rightToLeft') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="0" y="0" width="4" height="130" fill="url(#scanGrad)" class="scanner">
      <animateTransform attributeName="transform" type="translate" from="360 0" to="-20 0" dur="${dur}" repeatCount="indefinite" />
    </rect>`;
  }
  if (type === 'diagonal') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="-100" y="-100" width="4" height="300" fill="url(#scanGrad)" class="scanner" transform="rotate(45)">
      <animateTransform attributeName="transform" type="translate" from="-200 0" to="500 0" dur="${dur}" repeatCount="indefinite" additive="sum" />
    </rect>`;
  }
  if (type === 'pulseScanner') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="0" y="0" width="340" height="130" fill="url(#scanGrad)">
      <animate attributeName="opacity" values="0;1;0" dur="${dur}" repeatCount="indefinite"/>
    </rect>`;
  }
  if (type === 'doubleScan') {
    return `<linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${color}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${color}" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
    </linearGradient>
    <rect x="0" y="0" width="340" height="2" fill="url(#scanGrad)" class="scanner">
      <animateTransform attributeName="transform" type="translate" from="0 -20" to="0 150" dur="${dur}" repeatCount="indefinite" />
    </rect>
    <rect x="0" y="0" width="340" height="2" fill="url(#scanGrad)" class="scanner">
      <animateTransform attributeName="transform" type="translate" from="0 150" to="0 -20" dur="${dur}" repeatCount="indefinite" />
    </rect>`;
  }
  return '';
};

for (const [key, val] of Object.entries(config)) {
  const titleSvg = val.title2 
    ? `<text x="25" y="80" class="card-title">${val.title}</text><text x="25" y="100" class="card-title">${val.title2}</text>`
    : `<text x="25" y="90" class="card-title">${val.title}</text>`;
    
  const svg = `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <filter id="softGlow"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="logoGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <pattern id="hexGrid" width="40" height="69.282" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
      <path d="M 40 17.321 L 20 5.774 L 0 17.321 L 0 40.415 L 20 51.962 L 40 40.415 Z M 40 51.962 L 20 63.509 L 0 51.962 M 20 5.774 L 20 -5.774 M 20 75.056 L 20 63.509 M 40 17.321 L 60 5.774 M 0 17.321 L -20 5.774 M 40 40.415 L 60 51.962 M 0 40.415 L -20 51.962" stroke="${val.color}" stroke-opacity="0.04" stroke-width="1.5" fill="none"/>
    </pattern>
    <clipPath id="cardClip">
      <rect width="340" height="130" rx="12"/>
    </clipPath>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, 'Fira Code', monospace; }
    .card-bg { fill: #040910; stroke: ${val.color}; stroke-width: 1.5; rx: 12; transition: all 0.3s ease; }
    .card-title { font-family: 'Segoe UI', sans-serif; font-weight: 700; font-size: 15px; fill: #ffffff; letter-spacing: 0.5px; }
    .logo-path { fill: ${val.color}; filter: url(#logoGlow); }
    
    .hover-target { cursor: pointer; outline: none; }
    .hover-target:hover .card-bg { fill: #0a1322; stroke-width: 2.5; filter: url(#softGlow); }
    
    .scanner { opacity: 0.5; }
  </style>
  
  <rect width="340" height="130" rx="12" fill="url(#hexGrid)"/>
  
  <g class="hover-target">
    <rect width="340" height="130" class="card-bg"/>
    
    <!-- Logo -->
    <g transform="translate(25, 25) scale(1.5)">
      <path class="logo-path" d="${val.logo}"/>
    </g>
    
    <!-- Title -->
    ${titleSvg}
    
    <!-- Arrow -->
    <text x="305" y="115" class="mono" font-size="16" fill="${val.color}">↗</text>
    
    <!-- Glowing Border Animation -->
    <rect width="340" height="130" rx="12" fill="none" stroke="${val.color}" filter="url(#softGlow)">
      <animate attributeName="opacity" values="0;0.5;0" dur="3s" repeatCount="indefinite"/>
    </rect>
    
    <!-- Scanning Effect -->
    <g clip-path="url(#cardClip)">
      ${getAnimation(val.animType, val.color, val.dur)}
    </g>
  </g>
</svg>`;

  fs.writeFileSync(`../profiles/${key}.svg`, svg);
  console.log(`Generated ${key}.svg`);
}
