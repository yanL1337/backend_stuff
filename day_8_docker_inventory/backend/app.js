import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const server = express();
await mongoose.connect("mongodb://inventory:27017/things");
server.use(express.json());
server.use(cors());

server.post("/", (req, res) => {
  gegenstand.create({
    name: req.body.name,
    beschreibung: req.body.beschreibung,
    zimmer: req.body.zimmer,
    kategorie: req.body.kategorie,
  });

  res.end();
});

server.get("/", (req, res) => {
  res.json({ text: "nice" }).end();
});

const gegenstandSchema = new mongoose.Schema({
  name: String,
  beschreibung: String,
  zimmer: String,
  kategorie: Array,
});

const gegenstand = mongoose.model("Gegenstaende", gegenstandSchema);

server.listen(1337, () => console.log("sprintet"));
