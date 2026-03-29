import express from "express";
import { AppRequest, AppResponse } from "./Src/utils/types";
import { Server as SocketIOServer } from "socket.io";
import { Server } from "http";
import dotenv from "dotenv";
import path from "path";
import { dbconnection } from "./Database/dbconnection";
const app = express();
const port = 3000;

dotenv.config({ path: path.resolve("./config/.env") });

dbconnection();
app.get("/", (req: AppRequest, res: AppResponse) => {
  res.send("Hello World!");
});
let server: Server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
let io = new SocketIOServer(server, {
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
  socket.on('typing',()=>{
    socket.broadcast.emit('userStartType')
  })
  //user stop type
  socket.on('StopType',()=>{
    socket.broadcast.emit('userStopType')
  })
  socket.on("disconnect", () => {
    console.log("user disconnect");
  });
});
