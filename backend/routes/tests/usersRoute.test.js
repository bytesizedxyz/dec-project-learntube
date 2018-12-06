const app = require('../users');
const chai = require('chai'),
  chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Server', () => {
  describe('/users', () => {
    it('can get users', () => {
      chai
        .request(app)
        .get('/users')
        .end((_, res) => {
          expect(res.body).to.have.length(3);
        });
    });

    it("can 'create' a user", () => {
      const user = { id: 5, username: 'test' };
      chai
        .request(app)
        .post('/users')
        .send(user)
        .end((_, res) => {
          expect(res.body).to.eql(user);
        });
    });
  });

  describe('/users/:id', () => {
    it('can get a user', () => {
      chai
        .request(app)
        .get('/users/1')
        .end((_, res) => {
          expect(res.body.id).to.eql(1);
        });
    });

    it('can update a user', () => {
      const user = { id: 1, username: 'test' };
      chai
        .request(app)
        .put(`/users/${user.id}`)
        .send(user)
        .end((_, res) => {
          expect(res.body).to.eql(user);
        });
    });

    it('can delete a user', () => {
      chai
        .request(app)
        .delete(`/users/1`)
        .end((_, res) => {
          expect(res.status).to.eql(204);
        });
    });
  });

  after(() => process.exit());
});
