// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" });
//     console.log(req.url);

//     if (req.url == "/") {
//       res.write(`<form  action="/submit" method="post">
//         <input type:text placeholder="Enter name" name="name"/>
//         <input type:text placeholder="Enter email name="email"/>

//         <button> Submit </button>

//         </form>
//         `);
//     } else if (req.url == "/submit") {
//       res.write("<h1>Data submitted</h1>");
//     }

//     res.end();
//   })
//   .listen(9000);

// ----------------------------------------

const http = require("http");
const fs = require("fs");

const queryString = require("querystring"); // it package

http
  .createServer((req, res) => {
    fs.readFile("html/form.html", "utf-8", (error, data) => {
      if (error) {
        res.writeHead(500, { "Content-type": "text/plain" });
        res.end("intial server error");

        return;
      }
      res.writeHead(200, { "Content-type": "text/html" });

      if (req.url == "/") {
        res.write(data);
      } else if (req.url == "/submit") {
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });

        req.on("end", () => {
          let rawData = Buffer.concat(dataBody).toString();
          let readableData = queryString.parse(rawData);
          console.log(readableData);
          let dataString =
            "my name is" +
            readableData.name +
            "and  my email id is" +
            readableData.email;
          console.log(dataString);
          fs.writeFileSync("text/" + readableData.name + ".txt", dataString);
          console.log("file created ");
        });

        fs.writeFile(
          "text/" + readableData.name + ".txt",
          dataString,
          "utf-8",
          (err) => {
            if (err) {
              res.end("interna server error");
              return false;
            } else {
              console.log("fiel created ");
            }
          }
        );
        res.write("<h1> Data submited </h1>");
      }
      res.end();
    });
  })
  .listen(3000);
