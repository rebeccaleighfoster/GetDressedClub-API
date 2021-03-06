const supertest = require("supertest");
const app = require("../src/app");
const { expect } = require("chai");
const knex = require("knex");

const mockData = [
  {
    themename: "denim",
    theme_id: 8,
  },
];

//get
describe("GET, PUT, POST, DELETE themes", () => {
  let db;
  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: "postgres://localhost/getdressedclub-test",
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  it("should return an array of themes", () => {
    return supertest(app).get("/themes").expect(200, mockData);
  });

  it(`creates a theme, responding with 201 and the new theme`, function (done) {
    const theme_id = Math.floor(1000 + Math.random() * 9000);
    const newTheme = {
      themename: "denim",
      theme_id: theme_id,
    };

    supertest(app)
      .post("/themes")
      .send(newTheme)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
        expect(res.body.themename).to.eql(newTheme.themename);
        expect(res.body).to.have.property('theme_id')
        supertest(app)
          .delete(`/themes/${res.body.theme_id}`)
          .expect(204)
          .end(function (deleteErr, deleteResp) {
            if (err) throw err;
            done();
          });
      });
  });
});
