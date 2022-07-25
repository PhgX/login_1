const fs = require("fs");
const http = require("http");
const url = require("url");
const CheckTypeFile = require('./js_connect/check_Login_Filetype');
const checkRegister = require('./views/login/js/FileController/signup');
const LoginControl = require('./views/login/js/FileController/loginAccount.js')

// let connection = Connection.createConnection({multipleStatements: true});

const server = http.createServer((req, res) => {
  
  //Kiểm tra định dạng tệp req client của login & signup gửi lên server
  CheckTypeFile.checkFileType_Login(req, res);

  //filePath control
  let urlParse = url.parse(req.url); 
  let pathName = urlParse.pathname;
  switch (pathName) {
    case "/": {
      fs.readFile("./views/index.html", "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        }
      });
      break;
    }
    case "/signup": {
      if (req.method === "GET") {
        fs.readFile(
          "./views/login/SignUpAccount.html",
          "utf-8",
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              res.writeHead(200, { "Content-Type": "text/html" });
              res.write(data);
              return res.end();
            }
          }
        );
      } else {
        checkRegister.SignUpAccount(req, res);
      }
      break;
    }
    case "/login": {
      //Data control login site
      if (req.method === "GET") {
        fs.readFile("./views/login/login.html", "utf-8", (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            return res.end();
          }
        });
      } else {
        //Kiểm soát đăng nhập tài khoản
        LoginControl.LoginControl(req, res);
      }
      break;
    }
    // default: {
    //   fs.readFile("./views/404-error.html", "utf-8", (err, data) => {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.writeHead(200, { "Content-Type": "text/html" });
    //       res.write(data);
    //       return res.end();
    //     }
    //   });
    // }
  }
});

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});






