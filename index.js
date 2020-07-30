// Node modules
const express = require("express");
const http = require("http");

// 3rd party modules
const morgan = require("morgan");

// Dishes
const dishRouter = require("./routes/dishRouter");

// Promotions
const promoRouter = require("./routes/promoRouter");

// Leaders
const leaderRouter = require("./routes/leaderRouter");

// hostname & port
const hostname = "localhost";
const port = 3000;

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Middleware for Dishes
app.use("/dishes", dishRouter);
app.use("/dishes/:dishId", dishRouter);

//  Middleware for Promotions
app.use("/promotions", promoRouter);
app.use("/promotions/:promoId", promoRouter);

//  Middleware for Leaders
app.use("/leadership", leaderRouter);
app.use("/leaders/:leaderId", leaderRouter);

// static folder
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

// creating server
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
