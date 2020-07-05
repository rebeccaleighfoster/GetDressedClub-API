const FriendsService = {
    getAllFriends(knex) {
      return knex.select("*").from("friends");
    },
  
    insertFriend(knex, newFriend) {
      return knex
        .insert(newFriend)
        .into("friends")
        .returning("*")
        .then((rows) => {
          return rows[0];
        });
    },

    deleteFriend(knex, friend_id) {
      return knex("friends").where({ friend_id }).delete();
    },
  };
  
  module.exports = { FriendsService };

