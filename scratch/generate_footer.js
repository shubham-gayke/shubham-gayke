const fs = require('fs');

const generateFooter = () => {
  // Generate some animated dots for the matrix
  let dots = '';
  for(let i=0; i<15; i++) {
    for(let j=0; j<5; j++) {
      const cx = 35 + i * 19;
      const cy = 20 + j * 19;
      const delay = Math.random() * 5;
      const dur = 2 + Math.random() * 3;
      const opacity = 0.1 + Math.random() * 0.8;
      const color = Math.random() > 0.5 ? '#38bdf8' : '#22d3ee';
      dots += `<circle cx="${cx}" cy="${cy}" r="5" fill="${color}" opacity="0.1">
        <animate attributeName="opacity" values="0.1;${opacity};0.1" dur="${dur}s" begin="${delay}s" repeatCount="indefinite" />
      </circle>\n`;
    }
  }

  // Generate typing effect for terminal
  const lines = [
    '> ESTABLISH_CONNECTION()',
    '[OK] Connection established.',
    '> SYSTEM_TELEMETRY.render()',
    '[OK] Telemetry streams active.',
    '> FETCH_CONTRIBUTIONS()',
    '[OK] Data synchronized.',
    '> session.end()',
    'Thank you for visiting my profile.',
    'Until next time... ⚡'
  ];

  let typingAnims = '';
  let cumulativeTime = 0;
  lines.forEach((line, index) => {
    typingAnims += `<text x="20" y="${55 + index * 22}" class="term-text" fill="${index % 2 === 0 ? '#38bdf8' : '#c9d1d9'}" opacity="0">
      ${line}
      <animate attributeName="opacity" values="0;1;1" keyTimes="0;0.05;1" dur="20s" begin="${cumulativeTime}s" fill="freeze" repeatCount="indefinite" />
    </text>\n`;
    cumulativeTime += 1.5;
  });

  const svg = `<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <filter id="softGlow"><feGaussianBlur stdDeviation="15" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="strongGlow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    
    <pattern id="hexGrid" width="40" height="69.282" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
      <path d="M 40 17.321 L 20 5.774 L 0 17.321 L 0 40.415 L 20 51.962 L 40 40.415 Z M 40 51.962 L 20 63.509 L 0 51.962 M 20 5.774 L 20 -5.774 M 20 75.056 L 20 63.509 M 40 17.321 L 60 5.774 M 0 17.321 L -20 5.774 M 40 40.415 L 60 51.962 M 0 40.415 L -20 51.962" stroke="#38bdf8" stroke-opacity="0.05" stroke-width="1.5" fill="none"/>
    </pattern>

    <linearGradient id="barGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="1" />
    </linearGradient>
  </defs>

  <style>
    .mono { font-family: 'JetBrains Mono', Consolas, 'Fira Code', monospace; }
    .term-text { font-family: 'JetBrains Mono', Consolas, 'Fira Code', monospace; font-size: 13px; font-weight: 500; }
    .title { font-family: 'Segoe UI', sans-serif; font-size: 20px; font-weight: 700; fill: #ffffff; letter-spacing: 2px; }
    .subtitle { font-family: 'Segoe UI', sans-serif; font-size: 12px; font-weight: 600; fill: #38bdf8; letter-spacing: 1px; text-transform: uppercase; }
  </style>
  
  <rect width="800" height="320" fill="#040910" rx="16" />
  
  <!-- Ambient Orbs -->
  <g filter="url(#softGlow)">
    <circle r="150" fill="#22d3ee" opacity="0.15">
      <animate attributeName="cx" values="100; 700; 100" dur="20s" repeatCount="indefinite" />
      <animate attributeName="cy" values="50; 270; 50" dur="15s" repeatCount="indefinite" />
    </circle>
    <circle r="120" fill="#38bdf8" opacity="0.1">
      <animate attributeName="cx" values="700; 100; 700" dur="18s" repeatCount="indefinite" />
      <animate attributeName="cy" values="270; 50; 270" dur="12s" repeatCount="indefinite" />
    </circle>
  </g>

  <!-- Grid -->
  <rect width="800" height="320" fill="url(#hexGrid)" rx="16" />
  <rect width="800" height="320" fill="#040910" fill-opacity="0.6" rx="16" />
  <rect width="800" height="320" fill="none" stroke="#38bdf8" stroke-opacity="0.2" stroke-width="2" rx="16" />

  <!-- Terminal Window -->
  <g transform="translate(20, 20)">
    <rect width="400" height="280" fill="#020408" fill-opacity="0.75" rx="8" stroke="#38bdf8" stroke-opacity="0.3" />
    
    <!-- Terminal Header -->
    <path d="M 0 8 Q 0 0 8 0 L 392 0 Q 400 0 400 8 L 400 30 L 0 30 Z" fill="#0a1322" />
    <circle cx="15" cy="15" r="5" fill="#ef4444" />
    <circle cx="30" cy="15" r="5" fill="#f59e0b" />
    <circle cx="45" cy="15" r="5" fill="#22c55e" />
    <text x="200" y="20" class="term-text" fill="#c9d1d9" text-anchor="middle" font-size="12">glacier-os-terminal ~ shubham</text>
    
    <!-- Typing Text -->
    ${typingAnims}
    
    <!-- Blinking Cursor -->
    <rect x="20" y="260" width="8" height="12" fill="#38bdf8">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
  </g>

  <!-- Data Matrix / Stats -->
  <g transform="translate(440, 20)">
    <rect width="340" height="280" fill="#020408" fill-opacity="0.6" rx="8" stroke="#38bdf8" stroke-opacity="0.2" />
    
    <text x="20" y="30" class="subtitle">Neural Network Matrix</text>
    <line x1="20" y1="40" x2="320" y2="40" stroke="#38bdf8" stroke-opacity="0.2" />
    
    <!-- Animated Dots -->
    <g transform="translate(10, 30)">
      ${dots}
    </g>

    <!-- System Metrics -->
    <g transform="translate(20, 175)">
      <text x="0" y="0" class="subtitle">System Status</text>
      
      <text x="0" y="25" class="term-text" fill="#c9d1d9" font-size="11">CPU</text>
      <rect x="40" y="18" width="250" height="8" rx="4" fill="#0a1322" />
      <rect x="40" y="18" width="180" height="8" rx="4" fill="url(#barGrad)">
        <animate attributeName="width" values="160; 220; 180; 160" dur="4s" repeatCount="indefinite" />
      </rect>
      
      <text x="0" y="50" class="term-text" fill="#c9d1d9" font-size="11">MEM</text>
      <rect x="40" y="43" width="250" height="8" rx="4" fill="#0a1322" />
      <rect x="40" y="43" width="120" height="8" rx="4" fill="url(#barGrad)">
        <animate attributeName="width" values="100; 150; 120; 100" dur="5s" repeatCount="indefinite" />
      </rect>

      <text x="0" y="75" class="term-text" fill="#c9d1d9" font-size="11">NET</text>
      <rect x="40" y="68" width="250" height="8" rx="4" fill="#0a1322" />
      <rect x="40" y="68" width="240" height="8" rx="4" fill="#22c55e" filter="url(#strongGlow)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
    </g>
  </g>

  <!-- Glowing Border Sweep -->
  <rect width="800" height="320" fill="none" stroke="#22d3ee" stroke-width="2" rx="16" opacity="0">
    <animate attributeName="opacity" values="0;0.5;0" dur="5s" repeatCount="indefinite" />
  </rect>

</svg>`;

  fs.writeFileSync('../cyber_footer.svg', svg);
  console.log('Generated cyber_footer.svg');
};

generateFooter();
