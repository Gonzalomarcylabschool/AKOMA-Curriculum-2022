# Express-1.0
Basic Server actions

# Skills we're teaching
- (CORE) Creating a running server
- (CORE) How to use a host, port, and .listen
- (CORE) app.get
- Catchall * route
- (CORE) How basic middleware works
  - intercepts all requests (route logger)
  - middleware can modify req/res objects (models)
  - Express has built in middleware (express.json())
  - Order matters!
- (CORE) app.post and the body
- (CORE) app.patch and dynamicRoute params
  - They're *always* strings, be careful!
- (CORE) app.delete
- 200,201,204,404 status codes
  - .status vs .sendStatus
- Give the recipe for static hosting
  - Show how fetch '/' now works
- (CORE) Exporting the server

## Expected Existing skills
- Know `module.exports` and `require`
- Know what `process.env` variables are
- Know Node keyword: `__dirname`
- Already aware of the basics of an `http-server` are
  - req/res cycle
  - Params vs Query Params
- Destructuring
- Classes and class properties