const list = (req, res) => {
  console.log('get and list');
  const { Cars } = req;
  res.send(Cars.list());
}

module.exports = list;