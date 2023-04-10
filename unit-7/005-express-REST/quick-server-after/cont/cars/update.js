const update = (req, res) => {
  console.log('patch update');
  const { Cars, body: { car }, params: { id } } = req;
  const updateCar = Cars.editCar(Number(id), car);
  console.log(updateCar);
  res.status(201).send(updateCar);
}

module.exports = update;