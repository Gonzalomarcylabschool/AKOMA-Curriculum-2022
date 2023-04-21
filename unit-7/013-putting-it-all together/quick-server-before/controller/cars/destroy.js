const destroy = (req, res) => {
  const {Cars, params: { id }} = req;
  const deleted = Cars.delete(Number(id));
  const statusCode = deleted ? 204 : 404;
  res.sendStatus(statusCode);
}

module.exports = destroy;