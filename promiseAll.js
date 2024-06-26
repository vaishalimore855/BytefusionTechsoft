const fs = require('fs').promises;

// Function to read a file and return a promise
function readFile(filePath) {
  return fs.readFile(filePath, 'utf8');
}

// Array of file read promises
const filePromises = [
  readFile('file1.txt'),
  readFile('file2.txt'),
  readFile('file3.txt')
];

// Using Promise.all to wait for all file read promises to complete
Promise.all(filePromises)
  .then((fileContents) => {
    console.log('All files read successfully:');
    fileContents.forEach((content, index) => {
      console.log(`Content of file${index + 1}:`, content);
    });
  })
  .catch((error) => {
    console.error('Error reading files:', error);
  });
