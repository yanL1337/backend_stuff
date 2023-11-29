import express from "express";

const PORT = 1337;
const app = express();

app.use(express.static("pages"));

app.listen(PORT, () => console.log("läuft"));
