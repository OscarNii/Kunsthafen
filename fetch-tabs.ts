import https from 'https';
import fs from 'fs';

https.get('https://www.uilora.com/get-started/web/components/special-elements/tabs/neumorphic', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    fs.writeFileSync('tabs.html', d);
  });
});
