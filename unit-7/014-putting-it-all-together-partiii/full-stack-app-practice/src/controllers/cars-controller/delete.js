const destroy = async (req, res) => {
  const { Cars, params: { id } } = req;
  const result = await Cars.delete(Number(id));
  res.sendStatus(result ? 204 : 404);
};

module.exports = destroy;
