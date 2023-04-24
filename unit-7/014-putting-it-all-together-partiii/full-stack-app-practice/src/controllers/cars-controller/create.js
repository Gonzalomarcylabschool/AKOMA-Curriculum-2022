const create = async (req, res) => {
  const {Cars, body: {make, model, year, color} } = req;
  const newCar = await Cars.create(make, model, year, color);
  newCar ? res.status(201).send(newCar) : res.status(500).send({err: "Can't create"});
};

module.exports =create;