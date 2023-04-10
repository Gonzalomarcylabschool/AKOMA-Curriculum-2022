const list = (req, res) => {
  const { Cars } = req;
  res.send(Cars.list());
}

module.exports = list