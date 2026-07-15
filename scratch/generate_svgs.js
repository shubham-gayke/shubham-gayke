const fs = require('fs');
const paths = require('./paths.json');

const config = {
  leetcode: {
    color: '#38bdf8',
    title: 'LeetCode',
    logo: paths.leetcode,
    animType: 'pulseScanner',
    dur: '3s'
  },
  hackerrank: {
    color: '#5eead4',
    title: 'HackerRank',
    logo: paths.hackerrank,
    animType: 'pulseScanner',
    dur: '3.5s'
  },
  devto: {
    color: '#ffffff',
    title: 'DEV.TO Community Member',
    logo: paths.devdotto,
    animType: 'pulseScanner',
    dur: '4s'
  },
  credly: {
    color: '#38bdf8',
    title: 'Credly',
    logo: paths.credly,
    animType: 'pulseScanner',
    dur: '4.5s'
  },
  mslearn: {
    color: '#22d3ee',
    title: 'Microsoft Learn',
    logo: paths.microsoft,
    animType: 'pulseScanner',
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
    animType: 'pulseScanner',
    dur: '3s'
  }
};

const getAnimation = (color) => {
  return `
    <!-- Ambient floating orbs -->
    <g filter="url(#orbBlur)">
      <circle r="60" fill="${color}" opacity="0.3">
        <animate attributeName="cx" values="50; 290; 50" dur="12s" repeatCount="indefinite" />
        <animate attributeName="cy" values="30; 100; 30" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle r="50" fill="${color}" opacity="0.2">
        <animate attributeName="cx" values="290; 50; 290" dur="10s" repeatCount="indefinite" />
        <animate attributeName="cy" values="100; 30; 100" dur="9s" repeatCount="indefinite" />
      </circle>
    </g>
  `;
};

for (const [key, val] of Object.entries(config)) {
  const titleSvg = val.title2 
    ? `<text x="25" y="70" class="card-title">${val.title}</text><text x="25" y="90" class="card-title">${val.title2}</text>`
    : `<text x="25" y="80" class="card-title">${val.title}</text>`;
    
  const svg = `<svg viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <filter id="softGlow"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="logoGlow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="orbBlur"><feGaussianBlur stdDeviation="25" /></filter>
    
    <pattern id="hexGrid" width="40" height="69.282" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
      <path d="M 40 17.321 L 20 5.774 L 0 17.321 L 0 40.415 L 20 51.962 L 40 40.415 Z M 40 51.962 L 20 63.509 L 0 51.962 M 20 5.774 L 20 -5.774 M 20 75.056 L 20 63.509 M 40 17.321 L 60 5.774 M 0 17.321 L -20 5.774 M 40 40.415 L 60 51.962 M 0 40.415 L -20 51.962" stroke="${val.color}" stroke-opacity="0.05" stroke-width="1.5" fill="none"/>
    </pattern>
    <clipPath id="cardClip">
      <rect width="340" height="130" rx="12"/>
    </clipPath>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, 'Fira Code', monospace; }
    .card-bg { fill: #040910; stroke: ${val.color}; stroke-width: 1.5; rx: 12; transition: all 0.3s ease; }
    .card-title { font-family: 'Segoe UI', sans-serif; font-weight: 700; font-size: 16px; fill: #ffffff; letter-spacing: 0.5px; }
    .logo-path { fill: ${val.color}; filter: url(#logoGlow); }
    .btn-text { font-family: 'JetBrains Mono', Consolas, monospace; }
    
    .hover-target { cursor: pointer; outline: none; }
    .hover-target:hover .card-bg { fill: #0a1322; stroke-width: 2.5; filter: url(#softGlow); }
    .verify-btn { transition: all 0.3s ease; }
    .hover-target:hover .verify-btn rect { fill-opacity: 0.2; stroke-opacity: 1; filter: url(#softGlow); }
  </style>
  
  <rect width="340" height="130" rx="12" fill="#040910"/>
  
  <g class="hover-target" clip-path="url(#cardClip)">
    <!-- Orbs Animation -->
    ${getAnimation(val.color)}
    
    <!-- Grid Overlay -->
    <rect width="340" height="130" fill="url(#hexGrid)"/>
    
    <!-- Dark transparent overlay for glassmorphism effect -->
    <rect width="340" height="130" fill="#040910" fill-opacity="0.6"/>
    
    <rect width="340" height="130" class="card-bg" fill="none"/>
    
    <!-- Logo -->
    <g transform="translate(25, 20) scale(1.3)">
      <path class="logo-path" d="${val.logo}"/>
    </g>
    
    <!-- Title -->
    ${titleSvg}
    
    <!-- Glowing Border Animation -->
    <rect width="340" height="130" rx="12" fill="none" stroke="${val.color}" filter="url(#softGlow)">
      <animate attributeName="opacity" values="0;0.5;0" dur="4s" repeatCount="indefinite"/>
    </rect>

    <!-- Verify Button -->
    <g transform="translate(225, 90)" class="verify-btn">
      <rect width="95" height="24" rx="12" fill="${val.color}" fill-opacity="0.1" stroke="${val.color}" stroke-opacity="0.5"/>
      <text x="47.5" y="16" class="btn-text" fill="${val.color}" text-anchor="middle" font-size="11" font-weight="700" letter-spacing="0.5">VERIFY ↗</text>
    </g>
  </g>
</svg>`;

  fs.writeFileSync(`../profiles/${key}.svg`, svg);
  console.log(`Generated ${key}.svg`);
}
