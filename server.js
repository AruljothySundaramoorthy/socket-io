const express = require("express");
const app = express();
const port = 4000;
const http = require("http").createServer();
const io = require("socket.io")(http);
const { data } = require('./data.js')
io.on("connection", (socket) => {

    console.log("New Client is Connected!");



    socket.emit("welcome", "Hello and Welcome to the Server");

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    setInterval(() => {

        const index = getRandomInt(data.length)
        console.log(index)
        socket.emit("time", data[Math.floor(Math.random() * data.length)]);
    }, 1000);
});

http.listen(port, () => {
    console.log("Server Is Running Port: " + port);
});

