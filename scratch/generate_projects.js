const fs = require('fs');

const projects = [
  {
    title: "linguistai-devops",
    desc: "Production grade DevOps implementation of LinguistAI using Docker, Terraform, Ansible, Kubernetes.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 16
  },
  {
    title: "LinguistAI",
    desc: "Advanced translation platform built on MERN & Google Gemini. Supports real-time voice/video chat.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 8
  },
  {
    title: "linguistaimern",
    desc: "Backend API and microservices architecture for the LinguistAI ecosystem.",
    lang: "TypeScript",
    langColor: "#3178c6",
    stars: 4
  },
  {
    title: "Trend-Jacker",
    desc: "Built to simplify content creation in the short-form video era using AI automation.",
    lang: "JavaScript",
    langColor: "#f1e05a",
    stars: 12
  }
];

const generateProjectsSVG = () => {
  let cards = '';
  
  projects.forEach((proj, i) => {
    const x = (i % 2) * 390;
    const y = Math.floor(i / 2) * 160;
    const animDelay = i * 0.5;

    cards += `
    <g transform="translate(${x + 20}, ${y + 60})">
      <!-- Glow Effect on Hover (simulated with CSS) -->
      <rect width="360" height="140" rx="12" class="project-card" fill="#040910" stroke="#38bdf8" stroke-opacity="0.2"/>
      
      <!-- Animated scanning line -->
      <g clip-path="url(#cardClip)">
        <line x1="-50" y1="0" x2="410" y2="0" stroke="url(#scanGrad)" stroke-width="2" class="scanner">
          <animateTransform attributeName="transform" type="translate" from="0 -20" to="0 160" dur="4s" repeatCount="indefinite" begin="${animDelay}s"/>
        </line>
      </g>
      
      <!-- Icon -->
      <g transform="translate(20, 25)">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="#38bdf8">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1v-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
      </g>

      <text x="45" y="38" class="title">${proj.title}</text>
      
      <!-- Description with text wrapping simulation -->
      <foreignObject x="20" y="55" width="320" height="40">
        <div xmlns="http://www.w3.org/1999/xhtml" class="desc">${proj.desc}</div>
      </foreignObject>

      <!-- Language & Stars -->
      <circle cx="25" cy="115" r="4" fill="${proj.langColor}" />
      <text x="35" y="119" class="stats">${proj.lang}</text>
      
      <g transform="translate(100, 105)">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="#c9d1d9">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
        </svg>
        <text x="18" y="11" class="stats">${proj.stars}</text>
      </g>
      
      <rect width="360" height="140" rx="12" class="glass-overlay" fill="none" stroke="#22d3ee" stroke-opacity="0" stroke-width="2" />
    </g>
    `;
  });

  const svg = `<svg viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg" role="img">
  <defs>
    <filter id="glow"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
      <stop offset="50%" stop-color="#22d3ee" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
    </linearGradient>
    <clipPath id="cardClip">
      <rect width="360" height="140" rx="12"/>
    </clipPath>
  </defs>

  <style>
    .title { font-family: 'Segoe UI', sans-serif; font-size: 16px; font-weight: 600; fill: #38bdf8; }
    .desc { font-family: 'Segoe UI', sans-serif; font-size: 12px; color: #8b949e; line-height: 1.4; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .stats { font-family: 'Segoe UI', sans-serif; font-size: 12px; fill: #c9d1d9; }
    .project-card { transition: all 0.3s ease; }
    .glass-overlay { transition: stroke-opacity 0.3s ease; }
    g:hover > .project-card { fill: #0a1322; stroke-opacity: 0.8; filter: url(#glow); }
    g:hover > .glass-overlay { stroke-opacity: 0.5; }
    .header-title { font-family: 'Segoe UI', sans-serif; font-size: 22px; font-weight: 700; fill: #ffffff; letter-spacing: 2px; text-transform: uppercase; }
  </style>
  
  <rect width="800" height="380" fill="#040910" rx="16" opacity="0"/>
  
  <!-- Section Header -->
  <g transform="translate(20, 30)">
    <rect width="40" height="4" fill="#38bdf8" rx="2" />
    <text x="50" y="8" class="header-title">Mission Control / Top Projects</text>
  </g>

  ${cards}

</svg>`;

  fs.writeFileSync('../projects_animated.svg', svg);
  console.log('Generated projects_animated.svg');
};

generateProjectsSVG();
