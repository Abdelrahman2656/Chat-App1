"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const dbconnection_1 = require("./Database/dbconnection");
const app = (0, express_1.default)();
const port = 3000;
dotenv_1.default.config({ path: path_1.default.resolve("./config/.env") });
(0, dbconnection_1.dbconnection)();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
let server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
let io = new socket_io_1.Server(server, {
    cors: { origin: "*" },
});
io.on("connection", (socket) => {
    console.log(socket.id);
    console.log("user connected");
    socket.on("chatMsg", (msg) => {
        console.log(msg);
        socket.broadcast.emit("reply", msg);
    });
    //user start type 
    socket.on('typing', () => {
        socket.broadcast.emit('userStartType');
    });
    //user stop type
    socket.on('StopType', () => {
        socket.broadcast.emit('userStopType');
    });
    socket.on("disconnect", () => {
        console.log("user disconnect");
    });
});
