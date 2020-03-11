module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt'),
      ca: fs.readFileSync('./rootCA.pem'),
    }
    },
    
};