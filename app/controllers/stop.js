const stops = require("../data/stops");

exports.oee = (req, res) => {
  return res.status(200).send({ message: "Retornar de uma máquina" });
};

exports.oeeAllMachines = (req, res) => {
  return res.status(200).send({ message: "Retornar de todas as máquinas" });
};
