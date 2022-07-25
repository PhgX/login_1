const fs = require("fs");

function checkFileType_Login(req, res) {
  const mimeTypes = {
    html: "text/html",
    js: "text/javascript",
    css: "text/css",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
    png: "image/png",
    jpg: "image/jpg",
  };

  const filesDefences = req.url.match(/\.js$|.css$|.jpeg$|.svg$|.png$|.jpg$/);
  if (filesDefences) {
    const extension = mimeTypes[filesDefences[0].toString().split(".")[1]];
    res.writeHead(200, { "Content-Type": extension });
    // fs.createReadStream("./views/Login" + req.url).pipe(res);
    let filename = "./views/Login" + req.url;
    let readStream = fs.createReadStream(filename);
    readStream.on("open",  () => {
      readStream.pipe(res);
    });

    readStream.on("error", (err) => {
     return res.end(err);
    });
  }  
}

module.exports.checkFileType_Login = checkFileType_Login;
