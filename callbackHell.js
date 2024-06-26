const fs = require('fs');

fs.readFile('file1.txt', (err, data1) => {
    if (err) {
        console.error('Error reading file1:', err);
    } else {
        fs.readFile('file2.txt', (err, data2) => {
            if (err) {
                console.error('Error reading file2:', err);
            } else {
                fs.readFile('file3.txt', (err, data3) => {
                    if (err) {
                        console.error('Error reading file3:', err);
                    } else {
                        console.log('Content of file1:', data1);
                        console.log('Content of file2:', data2);
                        console.log('Content of file3:', data3);
                    }
                });
            }
        });
    }
});
