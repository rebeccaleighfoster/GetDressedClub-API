const supertest = require("supertest");
const app = require("../src/app");
const { expect } = require("chai");
const knex = require('knex');

const mockData = [{
    friendname: 'Rebecca',
    date: "2002",
    movebody: 'I stretched a bit',
    glasseswater: 7,
    leavehouse: 'no',
    winofday: 'I got a lot of work done',
    shower: 'yes',
    cleanroom: 'yes',
    dodishes: 'no',
    washface: 'yes',
    fooddrop: 'need',
    call: 'yes',
    distancewalk: "yes",
    log_id: 1,
    imagename: "filename.png"
}];

//get
describe("GET, PUT, POST, DELETE logs", () => {
  let db;
  before('make knex instance', () => {
      db = knex({
          client: 'pg',
          connection: 'postgres://localhost/getdressedclub-test',
      })
      app.set('db', db)


  after('disconnect from db', () => db.destroy())

before('clean the table', () => db('friendname,log_id, imagename distancewalk, call, fooddrop, washface, date, movebody, glasseswater, leavehouse, winofday, shower, cleanroom, dodishes').truncate())

afterEach('cleanup', () => db('friendname,log_id, imagename distancewalk, call, fooddrop, washface, date, movebody, glasseswater, leavehouse, winofday, shower, cleanroom, dodishes').truncate())

})

  it("should return an array of logs", () => {
    return supertest(app)
      .get('/dailylog')
      .expect(200, mockData);
  });

  it("responds with 200 and the dailylog associated with the log id", () => {
    const log_id = 1;
    return supertest(app)
      .get(`/dailylog/${log_id}`)
      .expect(200, mockData[0]);
  });

  it(`creates a dailylog, responding with 201 and the new dailylog`, function (done)  {
      const newdailylog= {
        friendname: 'Rebecca',
        date: "2002",
        movebody: 'I stretched a bit',
        glasseswater: 7,
        leavehouse: 'no',
        winofday: 'I got a lot of work done',
        shower: 'yes',
        cleanroom: 'yes',
        dodishes: 'no',
        washface: 'yes',
        fooddrop: 'need',
        call: 'yes',
        distancewalk: "yes",
        log_id: 1,
        imagename: "filename.png"
      }

      supertest(app)
        .post('/dailylog')
        .send(newdailylog)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          expect(res.body.friendname).to.eql(newdailylog.friendname)
          expect(res.body.date).to.eql(newdailylog.date)
          expect(res.body.movebody).to.eql(newdailylog.movebody)
          expect(res.body.glasseswater).to.eql(newdailylog.glasseswater)
          expect(res.body.leavehouse).to.eql(newdailylog.leavehouse)
          expect(res.body.winofday).to.eql(newdailylog.winofday)
          expect(res.body.shower).to.eql(newdailylog.shower)
          expect(res.body.cleanroom).to.eql(newdailylog.cleanroom)
          expect(res.body.dodishes).to.eql(newdailylog.dodishes)
          expect(res.body.washface).to.eql(newdailylog.washface)
          expect(res.body.fooddrop).to.eql(newdailylog.fooddrop)
          expect(res.body.call).to.eql(newdailylog.call)
          expect(res.body.distancewalk).to.eql(newdailylog.distancewalk)
          expect(res.body.log_id).to.eql(newdailylog.log_id)
          expect(res.body.imagename).to.eql(newdailylog.imagename)
          supertest(app)
            .delete(`/dailylog/${res.body.id}`)
            .expect(204)
            .end(function (deleteErr, deleteResp) {
              if (err) throw err;
              done();
            });
        });
    });
});
