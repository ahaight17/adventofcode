const PORT = 3000
const http = require('http');
const { day1 } = require('./1/day1');
const { day2 } = require('./2/day2');
const { day3 } = require('./3/day3');
const { day4 } = require('./4/4');

const server = http.createServer(function (req, res) {
    const d1 = day1()
    const d2 = day2()
    const d3 = day3()
    const d4 = day4()

    res.end(`
        Day 1 - ${d1}
        Day 2 - ${d2}
        Day 3 - ${d3}
        Day 4 - ${d4}
    `)
});

server.listen(PORT, () => {
    console.log(`Node.js web server at port ${PORT} is running..`)
});