const participantsRoutes = (app, fs) => {
  // variables
  const dataPath = "./data/participants.json";

  // READ
  app.get("/participants", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
};

module.exports = participantsRoutes;
