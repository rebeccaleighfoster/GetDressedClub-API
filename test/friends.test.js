const supertest = require("supertest");
const app = require("../src/app");
const { expect } = require("chai");
const knex = require("knex");

const mockData = [
  {
    name: "Anna",
    friend_id: 3,
  },
];

//get
describe("GET, PUT, POST, DELETE friends", () => {
  let db;
  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: "postgres://localhost/getdressedclub-test",
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("should return an array of friends", () => {
    return supertest(app).get("/friends").expect(200, mockData);
  });

  it(`creates a friend, responding with 201 and the new friend`, function (done) {
    const friend_id = Math.floor(1000 + Math.random() * 9000);
    const newfriend = {
      name: "Anna",
      friend_id: friend_id,
    };

    supertest(app)
      .post("/friends")
      .send(newfriend)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body.name).to.eql(newfriend.name);
        expect(res.body.friend_id).to.eql(newfriend.friend_id);
        supertest(app)
          .delete(`/friends/${newfriend.friend_id}`)
          .expect(204)
          .end(function (deleteErr, deleteResp) {
            if (err) throw err;
            done();
          });
      });
  });
});
