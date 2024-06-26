const fs = require('fs').promises;

// Function that returns a Promise
function fetchData() {
  return fs.readFile('example.txt', 'utf8');
}

// Using the Promise
fetchData()
  .then((data) => {
    console.log('File content:', data); // Log the resolved value
  })
  .catch((error) => {
    console.error('Error reading file:', error); // Log the rejected value
  });
