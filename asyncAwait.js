const fs = require('fs').promises;

const readFiles = async () => {
    try {
        const data1 = await fs.readFile('file1.txt', 'utf8');
        console.log('Content of file1:', data1);

        const data2 = await fs.readFile('file2.txt', 'utf8');
        console.log('Content of file2:', data2);

        const data3 = await fs.readFile('file3.txt', 'utf8');
        console.log('Content of file3:', data3);
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

readFiles();
