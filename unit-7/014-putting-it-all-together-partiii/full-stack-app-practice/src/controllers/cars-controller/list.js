const list = async (req, res) => {
  const cars = await req.Cars.list();
  res.send(cars);
}

module.exports = list;