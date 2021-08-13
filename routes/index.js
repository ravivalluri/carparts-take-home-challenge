// import other routes
const participantsRoutes = require("./participants");
const gamesRoutes = require("./games");

const appRouter = (app, fs) => {
  // default route
  app.get("/", (req, res) => {
    res.send("Sample App");
  });
  gamesRoutes(app, fs);
  participantsRoutes(app, fs);
};

module.exports = appRouter;
