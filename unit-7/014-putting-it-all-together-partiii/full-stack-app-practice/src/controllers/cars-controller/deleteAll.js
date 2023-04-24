const destroyAll = async (req, res) => {
  const { Cars } = req;

  await Cars.deleteAll();
  res.sendStatus(204);
  // Why no 404 for an empty list like last time?
  // Because with knex, the TRUNCATE command doesn't return anything.
  // And we don't care enough to run a list() query first
};

module.exports = destroyAll;