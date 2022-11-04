const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
let text = '';
stream.on('data', chunk => text += chunk.toString());
stream.on('end', ()=>console.log(text));
