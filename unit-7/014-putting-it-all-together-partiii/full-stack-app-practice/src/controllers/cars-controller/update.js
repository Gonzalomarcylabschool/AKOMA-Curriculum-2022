const update = async (req, res) => {
  const {
    ToDo,
    params: { id },
    body: { make, model, year, color },
  } = req;
  const car = await ToDo.updateCompletion(Number(id), make, model, year, color);
  if (!car) return res.sendStatus(404);
  res.send(car);
};

module.exports = update;
