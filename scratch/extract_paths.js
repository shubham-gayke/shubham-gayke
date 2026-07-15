const fs = require('fs');
const icons = ['leetcode', 'hackerrank', 'devdotto', 'credly', 'microsoftazure', 'amazonwebservices', 'oracle', 'microsoft'];
const result = {};

icons.forEach(icon => {
  const content = fs.readFileSync(`${icon}.svg`, 'utf8');
  const pathMatch = content.match(/<path[^>]*d="([^"]+)"/);
  if (pathMatch) {
    result[icon] = pathMatch[1];
  }
});

fs.writeFileSync('paths.json', JSON.stringify(result, null, 2));
