import fs from "fs";
import http from "http";

const readFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      //! Error code in header schreiben
      res.writeHead(500);
      // ! its broken ausgeben
      res.end("its broken");
      return;
    }
    // ! Kein error also daten schreiben
    res.end(data);
  });
};

// # Request Listener schaut ob request url gleich der bedingung ist

const reqHandler = (req, res) => {
  console.log("Method: ", req.method);

  if (req.url === "/") {
    readFile("./assets/index.html", res);
  } else if (req.url === "/about") {
    readFile("./assets/about.html", res);
  }
};

//! Server erstellen und requestlistener übergeben
const server = http.createServer(reqHandler);

//! server starten
server.listen(1337, () => console.log("run forest"));
