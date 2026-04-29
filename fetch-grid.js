const https = require('https');
https.get('https://www.uilora.com/get-started/web/components/grids-layouts/feature-grids/elastic-grid', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => require('fs').writeFileSync('grid.html', data));
});
