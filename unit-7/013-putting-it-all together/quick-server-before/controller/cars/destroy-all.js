const delete_All = (req, res) => {
  const { Cars } = req;
  const result = Cars.deleteAll();
  res.sendStatus(result ? 204 : 404);
};

module.exports = delete_All;
