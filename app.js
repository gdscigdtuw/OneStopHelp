const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
  const filePath = req.url=='/'||req.url=='/favicon.ico'?'/views/index.html':req.url;
  const extension = path.extname(filePath).slice(1);
  const type = extension=='png'||extension=='jpg'||extension=='jpeg'?'image':'text';
  res.setHeader('Content-Type', type+'/'+extension);
  fs.readFile('.'+filePath,(err,data)=>{
    if(err){
      console.log(err);
    }else{
      res.write(data);
    } 
    res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
