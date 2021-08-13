const gamesRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/games.json";

  // READ
  app.get("/games", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = gamesRoutes;
