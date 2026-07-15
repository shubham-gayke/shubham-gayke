const fs = require('fs');
const https = require('https');

const icons = ['leetcode', 'hackerrank', 'devdotto', 'credly', 'microsoftazure', 'amazonwebservices', 'oracle', 'microsoft'];

icons.forEach(icon => {
  https.get(`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${icon}.svg`, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      fs.writeFileSync(`${icon}.svg`, data);
      console.log(`Saved ${icon}.svg`);
    });
  });
});
