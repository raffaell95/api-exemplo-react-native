var http = require("http"),
  app = require("./config/express");

http.createServer(app).listen(process.env.PORT || 3030)
