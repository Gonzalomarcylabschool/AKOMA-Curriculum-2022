const logRoutes = (req, res, next) => {
  const time = (new Date()).toLocaleString();
  if (process.env.NODE_ENV !== 'test') {
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  }
  next();
};

module.exports = logRoutes;
