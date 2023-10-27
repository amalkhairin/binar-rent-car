const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const { PORT = 3005 } = process.env

function serveHtml(filename, res) {
    filePath = path.join(__dirname, '../public', `${filename}.html`)
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.end('Page not found')
        } else {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        }
    })
}

const server = http.createServer((req, res) => {
    const reqURL = url.parse(req.url).pathname
    filename = path.basename(reqURL)

    const folders = ['css','images','scripts']

    const publicDir = path.join(__dirname, '../public')

    const contentTypeDefault = {
        ".css": "text/css",
        ".jpeg": "image/jpeg",
        ".jpg": "image/jpg",
        ".png": "image/png",
        ".js": "text/javascript",
    }

    const extName = path.extname(reqURL);

    console.log(reqURL)

    const isAccesingPublicFolder = folders.some((folder) => reqURL.includes(folder))
    if (isAccesingPublicFolder) {
        const fileText = fs.readFileSync(path.join(__dirname, "..", "public", reqURL));
        const extName = path.extname(reqURL);
        res.writeHead(200, { "Content-Type": contentTypeDefault[extName] });
        res.end(fileText);
        // for (const subDir of folders) {
        //     const subDirPath = path.join(publicDir, subDir)
        //     const file = path.join(subDirPath, filename)

        //     if(fs.existsSync(file)) {
        //         res.writeHead(200, { "Content-Type": contentTypeDefault[extName] });
        //         res.end(file);
        //         return;
        //     }
        // }
    }

    switch (reqURL) {
        case '/':
            serveHtml('index', res)
            break;
        default:
            break;
    }

})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
