const http = require('http');


http.createServer((req , res) =>{
    res.setHeader("Content-Type" , "text/html")  // THIS ARE convert h2 to html formaet like h1 type 
        res.write(`
            <html>
            <head>
            <h1>Hello ms dhoni</h1>
            </head>
            </html>
            `)  
    res.end("hello this is my server")  // curre4nt reaues6t end  thai jai atler mate usefd thai
//    process.exit();  // it hit onw request after  it exit not hit next request



}).listen(4000)