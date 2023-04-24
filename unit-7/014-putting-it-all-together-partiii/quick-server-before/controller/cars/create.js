const create = (req, res) => {
  const { Cars, body :{ make, model, year, color } } = req;
  const newCar = new Cars(make, model, year, color);
  res.status(201).send(newCar);
}

module.exports = create