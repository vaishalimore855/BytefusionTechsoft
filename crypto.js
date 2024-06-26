const crypto = require('crypto');

crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () => {
    console.log('Done');
});
