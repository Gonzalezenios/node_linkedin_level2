const { createServer } = require("http")
const { createReadStream } = require("fs")
const { decode } = require ("querystring")

const sendFile = (res, status, type, filepath) => {
    res.writeHead(status, { "Content-Type": type })
    createReadStream(filepath).pipe(res)
}

createServer((req, res) => {

    if (req.method === "POST") {
        let body = "";
        req.on("data", data => {
            body += data;
        })
        req.on("end", () => {
            const { name, email, message } = decode(body)
            console.log(`${name} (${email}): ${message}`)
        })
    }

    switch (req.url) {
        case "/":
            return sendFile(res, 200, "text/html", "./home-page.html");
        case "/contact":
            return sendFile(res, 200, "text/html", "./contact.html")
        case "/img/enio.jpeg":
            return sendFile(res, 200, "img/jpg", "./enio.jpeg");
        case "/style.css":
            return sendFile(res, 200, "text/css", "./style.css");
        default:
            return sendFile(res, 200, "text/html", "./404.html")
    }
}).listen(3000);

console.log("Enio's personal website running on port 3000")
