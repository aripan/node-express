const express = require("express");

const dishRouter = express.Router();

dishRouter.use(express.json());

dishRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res, next) => {
    res.send("Will send all the dishes to you!");
  })
  .post((req, res, next) => {
    res.send(
      "Will add the dish: " +
        req.body.name +
        "with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.status(403).send("PUT operation is not supported on /dishes");
  })
  .delete((req, res, next) => {
    res.send("Deleting all the dishes!");
  });

module.exports = dishRouter;
