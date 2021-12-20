const io = require("socket.io-client");
//First Connect to the Server on the Specific URL (HOST:PORT)
let socket = io("https://61c085459eb0df360f6bb75a--relaxed-albattani-91b293.netlify.app/");
//Now Listen for Events (welcome event).
socket.on("welcome", (data) => {
    /*For the listener we specify the event name and we give the callback to which be called one the 
    event is emitted*/
    //Log the Welcome message 
    console.log("Message: ", data);
});

setInterval(() => {
    socket.on("time", (data) => {
        /*For the listener we specify the event name and we give the callback to which be called one the 
        event is emitted*/
        //Log the Welcome message 
        console.log("Message: ", data);
    });
}, 1000);