const fs = require('fs').promises;  // Use the promises API

// Function to read a file and return a promise
const readFile = (filePath) => {
    return fs.readFile(filePath, 'utf8');
};

// Sequentially read files using promise chaining
readFile('file1.txt')
    .then(data1 => {
        console.log('Content of file1:', data1);
        return readFile('file2.txt');
    })
    .then(data2 => {
        console.log('Content of file2:', data2);
        return readFile('file3.txt');
    })
    .then(data3 => {
        console.log('Content of file3:', data3);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });
