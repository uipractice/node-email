const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const config = require("./config");
const routing = require("./routing");
const serverless = require("serverless-http");
app.use(bodyParser.json());
app.use(cors());
app.use("/api", routing);
app.listen(config.PORT, (err, res) => {
  if (err) {
    console.log(`Getting error while listining the port`);
  } else {
    console.log(`Server running on port number : ${config.PORT}`);
  }
});

process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
  })
  .on("uncaughtException", (err) => {
    console.error(err, "Uncaught Exception thrown");
    process.exit(1);
  })
  .on("warning", (warning) => {
    console.log(warning.stack);
  });

  app.use('/*', (req, res)=>{
    res.status(404).send(`API not found123`);
  })

module.exports.handler = serverless(app);