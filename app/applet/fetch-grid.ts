import https from 'https';
import fs from 'fs';
https.get('https://www.uilora.com/get-started/web/components/grids-layouts/feature-grids/elastic-grid', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => {
    fs.writeFileSync('grid.html', data);
    console.log("Downloaded");
  });
});
