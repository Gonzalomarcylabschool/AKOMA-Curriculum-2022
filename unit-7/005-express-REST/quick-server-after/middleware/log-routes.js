const logRoutes = ((req, res, next) => { //middleware to console.log request method/URL, and time and date
  const time = (new Date()).toLocaleString();// store the time and date into a variable
  console.log(`${req.method}: ${req.originalUrl} - ${time}`) //this will be log to the console
  next(); // move on to the next middleware (or route handler)
});

module.exports = logRoutes;