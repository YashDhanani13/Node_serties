const fs = require('fs');  // fs - file systemm  it create , read, write

const os = require('os');  // here the os means operating system

fs.writeFileSync("demo.txt" , "this is with modules")
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());
