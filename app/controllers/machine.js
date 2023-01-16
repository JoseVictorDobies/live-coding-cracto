const machines = require("../data/machines");

exports.getAll = (req, res) => {
  return res.status(200).send(machines);
};
