const express = require("express");
const { ThemesService } = require("./ThemesService.js");

const themesRouter = express();

themesRouter.get("/", (req, res) => {
  console.log("themes");
  const knexInstance = req.app.get("db");
  ThemesService.getAllThemes(knexInstance)
    .then((themes) => {
      res.json(themes);
    })
    .catch((err) => {
      res.json(err);
    });
});

// themesRouter.post("/", (req, res) => {
//   const newWeaver = req.body;
//   console.log(newWeaver);
//   for (const [key, value] of Object.entries(newWeaver))
//     if (value == null)
//       return res.status(400).json({
//         error: { message: `Missing '${key}' in request body` },
//       });
//   WeaversService.insertWeaver(req.app.get("db"), newWeaver)
//     .then((weaver) => {
//       res.json(weaver);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = themesRouter;
