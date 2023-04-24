const find = async (req, res) => {
  const { Cars, params: { id } } = req;
  const car = await Cars.find(Number(id));
  if (!car) return res.sendStatus(404);
  res.send(car);
};

module.exports = find;
