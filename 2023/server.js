const PORT = 3000
const http = require('http');
const { day1 } = require('./1/day1');

const server = http.createServer(function (req, res) {
    const d1 = day1()
    
    res.end(`
        Day 1 - ${d1}
    `)
});

server.listen(PORT, () => {
    console.log(`Node.js web server at port ${PORT} is running..`)
});