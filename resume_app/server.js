const fs = require('fs');
const express = require('express');
const server = express()
const data = JSON.parse(fs.readFileSync('resume.json'));
server.get('/', (req,res) => {

    res.send(data);
})

server.listen(3000, () => console.log('listening'))
