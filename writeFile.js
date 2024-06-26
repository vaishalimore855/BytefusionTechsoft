const fs = require('fs');

const content = 'This is some content to write into the file.';

fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written successfully.');
});
