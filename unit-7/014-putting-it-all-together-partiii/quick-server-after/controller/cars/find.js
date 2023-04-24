const find = (req, res) => {
  console.log('find one');
  const { Cars, params: { id } } = req;
  const found = Cars.find(Number(id));
  if (!found) res.sendStatus(404); 
  res.send(found)
};

module.exports = find;