const PORT = 3000
const http = require('http');
const { day1 } = require('./1/day1');
const { day2 } = require('./2/day2');

const server = http.createServer(function (req, res) {
    const d1 = day1()
    const d2 = day2()

    res.end(`
        Day 1 - ${d1}
        Day 2 - ${d2}
    `)
});

server.listen(PORT, () => {
    console.log(`Node.js web server at port ${PORT} is running..`)
});