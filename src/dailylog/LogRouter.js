const express = require("express");
const { DailyLogService } = require("./LogService.js");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

const dailylogRouter = express();

dailylogRouter.get("/", (req, res) => {
  const knexInstance = req.app.get("db");
  DailyLogService.getAllLogs(knexInstance)
    .then((logs) => {
      console.log(logs)
      res.json(logs);
    })
    .catch((err) => {
      console.log(err)
      res.json({error: err});
    });
});

dailylogRouter.post("/", (req, res) => {
  const newLogs = req.body;
  console.log(newLogs);
  for (const [key, value] of Object.entries(newLogs))
    if (value == null)
      return res.status(400).json({
        error: { message: `Missing '${key}' in request body` },
      });
  DailyLogService.insertLogs(req.app.get("db"), newLogs)
    .then((logs) => {
      res.json(logs);
    })
    .catch((err) => {
      res.json(err);
    });
});

//code to be used when deployed with upgraded database
// const upload = multer({
//   dest: "../uploads",
// });

// dailylogRouter.post(
//   "/image/upload/:dailylogid",
//   upload.single("file"),
//   (req, res) => {
//     const tempPath = req.file.path;
//     fs.readFile(tempPath, function (err, data) {
//       const imageName = req.file.originalname;
//       if (!imageName) {
//         res.send(400).json({ msg: "invalid Image" });
//       } else {
//         DailyLogService.insertLogImage(
//           req.app.get("db"),
//           req.params.dailylogid,
//           imageName
//         )
//           .then((logs) => {
//             console.log("logs success", logs);
//             const newPath = __dirname + "../../uploads/" + imageName;
//             console.log(newPath);
//             fs.writeFile(newPath, data, function (err) {
//               console.log(err);
//             });
//           })
//           .catch((err) => {
//             res.json(err);
//           });
//       }
//     });
//   }
// );

dailylogRouter.patch("/edit/:id", (req, res) => {
  const updatedLog = req.body;
  DailyLogService.updateLog(
    req.app.get("db"),
    parseInt(req.params.id),
    updatedLog
  )
    .then((updatedLog) => {
      res.json(updatedLog);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

dailylogRouter.get("/:id", (req, res) => {
  DailyLogService.getLogById(req.app.get("db"), parseInt(req.params.id))
    .then((updatedLog) => {
      res.json(updatedLog);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

dailylogRouter.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  DailyLogService.deleteLog(req.app.get("db"), req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = dailylogRouter;
