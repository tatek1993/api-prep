/* Go to https://www.youtube.com/watch?v=dQw4w9WgXcQ and follow the instructions and code! */
const server = require('./server.js');

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`\n === The server is running! === \n`);
});