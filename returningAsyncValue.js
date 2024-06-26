const fs = require('fs').promises;

// Async function to read a file and return its content
const readFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;  // Returning the file content
    } catch (err) {
        throw new Error(`Error reading ${filePath}: ${err.message}`);
    }
};

// Function to consume the async function
const displayFileContent = async () => {
    try {
        const data = await readFile('file1.txt');
        console.log('File Content:', data);
    } catch (err) {
        console.error('Error:', err.message);
    }
};

// Call the function to display file content
displayFileContent();
