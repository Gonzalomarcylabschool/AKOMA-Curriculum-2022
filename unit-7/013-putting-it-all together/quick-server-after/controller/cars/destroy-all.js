const delete_All = (req, res) => {
  console.log('destroy all');
  const { Cars } = req;
  const result = Cars.deleteAll();
  res.sendStatus(result ? 204 : 404);
};

module.exports = delete_All;
