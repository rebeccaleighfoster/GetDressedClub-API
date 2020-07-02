const express = require("express");
const { ThemesService } = require("./ThemesService.js");

const themesRouter = express();

themesRouter.get("/", (req, res) => {
  const knexInstance = req.app.get("db");
  ThemesService.getAllThemes(knexInstance)
    .then((themes) => {
        console.log(themes)
      res.json(themes);
    })
    .catch((err) => {
      res.json(err);
    });
});
  
themesRouter.post("/", (req, res) => {
  const newTheme = req.body;
  console.log(newTheme);
  for (const [key, value] of Object.entries(newTheme))
    if (value == null)
      return res.status(400).json({
        error: { message: `Missing '${key}' in request body` },
      });
  ThemesService.insertTheme(req.app.get("db"), newTheme)
    .then((theme) => {
      res.json(theme);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = themesRouter;
