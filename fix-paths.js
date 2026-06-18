import fs from 'fs';
const file = 'dist/index.html';
if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/(src|href)="\/_astro\//g, '$1="./_astro/');
    fs.writeFileSync(file, html);
    console.log('Rutas relativas aplicadas a dist/index.html');
}
