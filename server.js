const fs = require('fs');
const express = require('express');
const server = express()
const data = JSON.parse(fs.readFileSync('resume.json'));
const port = process.env.PORT || 3000;
server.get('/', (req,res) => {

    res.send(data);
})

server.listen(port, () => console.log('listening'))
