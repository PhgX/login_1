const fs = require("fs");


function checkFileType_Login(req, res) {
  let checkUrl = req.url;
//   console.log('checkUrl = ' + checkUrl);
  let fileName = checkUrl.split("/")[2];
//   console.log('filename = ' + fileName);
  let lastDotIndex = checkUrl.lastIndexOf(".");
  let fileType = checkUrl.slice(lastDotIndex + 1);
//   console.log('filetype = ' + fileType);

  //Check file type
  if (fileType) {
    switch (fileType) {
      case 'ico': {
        fs.readFile(`./views/login/images/favicon.ico`, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.writeHead(200, { "Content-Type": "image/ico" });
              res.write(data);
              return res.end();
            }
          });
          break;
      }
      case "png": {
        fs.readFile(`./views/login/images/${fileName}`, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.writeHead(200, { "Content-Type": "image/png" });
            res.write(data);
            return res.end();
          }
        });
        break;
      }
      case "jpg": {
        fs.readFile(`./views/login/images/${fileName}`, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.writeHead(200, { "Content-Type": "image/jpg" });
            res.write(data);
            return res.end();
          }
        });
        break;
      }
      case "css": {
        fs.readFile(`./views/login/css/${fileName}`, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.write(data);
            return res.end();
          }
        });
        break;
      }
      case "js": {
        fs.readFile(`./views/login/js/${fileName}`, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.write(data);
            return res.end();
          }
        });
        break;
      }      
    }
  }
}

module.exports = checkFileType_Login;
