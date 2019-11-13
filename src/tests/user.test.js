import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing auth endpoints', () => {
  it('should create user', (done) => {
    const newUser = { username: 'bill',
      password: 'thisIS24!#',
      email: 'tkbillkabanga@gmail.com' };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(newUser)
      .end((err, res) => {
        expect(res.status).to.equal(201);
      });
    done();
  });
});
