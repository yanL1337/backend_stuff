import fs from "fs";
import http from "http";

const fileHandler = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("Little Fail");
      return;
    }

    res.end(data);
  });
};

const reqListener = (req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/") {
    fileHandler("./assets/index.html", res);
  } else {
    const fPath = "./assets" + req.url;

    fileHandler(fPath, res);
  }

  //   req.url === "/about" ? fileHandler("./assets/about.html", res) : null;
  //   req.url === "/faq" ? fileHandler("./assets/faq.html", res) : null;
};

const server = http.createServer(reqListener);

server.listen(1337, () => console.log("run forest"));
