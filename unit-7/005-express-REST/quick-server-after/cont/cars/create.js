const create = (req, res) => {
  const { Cars, body :{ car } } = req;
  const newCar = new Cars(car);
  res.status(201).send(newCar);
}

module.exports = create