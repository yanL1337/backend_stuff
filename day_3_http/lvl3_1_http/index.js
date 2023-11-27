import fs from "fs";
import http from "http";

const fileHandler = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("Fehler 1 ", err);
      return;
    }

    res.end(data);
  });
};

const reqListener = (req, res) => {
  if (req.url === "/") {
    fileHandler("./assets/index.html", res);
  } else {
    const filePath = "./assets" + req.url;
    fileHandler(filePath, res);
  }
};

const server = http.createServer(reqListener);

server.listen(1337, () => console.log("loift"));
