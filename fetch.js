const https = require('https');
https.get('https://www.uilora.com/get-started/web/components/crazy-components/image-trail-effect', (res) => {
  let data = '';
  res.on('data', (c) => data += c);
  res.on('end', () => console.log(data));
});
