const fs = require("fs")

const readFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data
      } catch (err) {
        console.error(err);
      }
}

module.exports = { readFile }