const http = require("http");

const usersData = [
  {
    name: "milan",
    age: 22,
    email: "milan12@gmail.com",
  },
  {
    name: "jayesh",
    age: 12,
    email: "jayesh11@gmail.com",
  },
  {
    name: "ramesh",
    age: 13,
    email: "ramesh23@gmail.com",
  },
];
http.createServer((req, res) => {
    res.setHeader("Content-Type" ,"app;ication/json")
    res.write(JSON.stringify(usersData))
    res.end();

}).listen(5000);
