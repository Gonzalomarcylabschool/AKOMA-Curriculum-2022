
const destroyAllController = (req, res) => {
  const  { Cars } = req;
  const result = Cars.deleteAll();
  
  res.sendStatus(result ? 204 : 404);
}