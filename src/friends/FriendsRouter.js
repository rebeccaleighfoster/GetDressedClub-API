const express = require("express");
const { FriendsService } = require("./FriendsService");
const friendsRouter = express();

friendsRouter.get("/", (req, res) => {
  const knexInstance = req.app.get("db");
  FriendsService.getAllFriends(knexInstance)
    .then((friends) => {
      res.json(friends);
    })
    .catch((err) => {
      console.log(err)
      res.json(err);
    });
});
  
friendsRouter.post("/", (req, res) => {
  const newFriend = req.body;
  for (const [key, value] of Object.entries(newFriend))
    if (value == null)
      return res.status(400).json({
        error: { message: `Missing '${key}' in request body` },
      });
  FriendsService.insertFriend(req.app.get("db"), newFriend)
    .then((friend) => {
      res.json(friend);
    })
    .catch((err) => {
      res.json(err);
    });
});

friendsRouter.delete("/:id", (req, res, next) => {
  FriendsService.deleteFriend(req.app.get("db"), req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = friendsRouter;
