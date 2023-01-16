module.exports = (app) => {
  const router = require("express").Router();
  const machine = require("../controllers/machine.js");
  const stop = require("../controllers/stop.js");

  app.use((req, res, next) => {
    req.idCompany = 1;
    return next();
  });

  // Machine
  router.get("/machines", machine.getAll);

  // OEE
  router.get("/oee/:id", stop.oee);
  router.get("/oee/all", stop.oeeAllMachines);

  router.get("/", (req, res) => {
    return res.json({
      message: "API Live Coding Cracto",
      time: Math.floor(Date.now() / 1000),
    });
  });

  app.use("/api", router);
};
