import express from "express";

const server = express();

const Port = 1337;

server.get("/", (req, res) => {
  res.json({ text: "dd" });
});

server.listen(Port, () => console.log(`Rennt mit ${Port} sachen`));
