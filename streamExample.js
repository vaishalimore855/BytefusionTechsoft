const fs = require('fs');

// Create a readable stream from input.txt
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to output.txt
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle events (optional)
readableStream.on('end', () => {
    console.log('File reading finished.');
});

writableStream.on('finish', () => {
    console.log('File writing finished.');
});
