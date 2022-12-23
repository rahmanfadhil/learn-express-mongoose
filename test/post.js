import app from "index"
import chai from "chai";
import expect from "chai";
import chaiHttp from "chai-http";
import { describe, it } from "mocha";


chai.use(chaiHttp);


describe("USER API test", () => {

  describe('/GET', () => {
    it('it should GET all users', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(204);
          done();
        });
    });
  });


  describe('/GET', () => {
    it('it should GET a single  users', (done) => {
      chai.request(app)
        .get('/api/users/:id')
        .end((err, res) => {
          expect(res.statusCode).to.equal(404);
          done();
        });
    });
  });

  
  describe('/post', () => {
    it('it should create a user', (done) => {
      chai.request(app)
        .post('/api//add-users')
        .end((err, res) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
    });
  });
});