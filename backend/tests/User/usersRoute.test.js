process.env.TEST_SUITE = 'user-routes-test';
const request = require('supertest');
const server = require('../../server');
const User = require('../../db/knex');
const { UNPROCESSABLE_ENTITY, BAD_REQUEST, SUCCESS } = require('../../services/statusCodes');
const { postRequest, getRequest, dropCollection, parseJson } = require('./mockRequests');
const newUser = {
  username: 'NewUser',
  email: 'newUser@NewEmail.com',
  password: 'awesomePassword',
  is_admin: false
};
const loginUserInput = {
  username: 'NewUser',
  password: 'awesomePassword'
};
const badLoginUserInput = {
  username: null,
  password: 'passworddwadawd',
  email: 'anEmail@email.com'
};
const badUserInput = {
  username: 'NewUser',
  password: 'notTheCorrectPassword'
};
const foundUser = {
  username: 'NewUser',
  email: 'newUser@NewEmail.com',
  is_admin: false
};
describe('Hitting the userRoutes, a User may', () => {
  beforeAll(async done => {
    createdRequest = await request.agent(server);
    done();
    console.log('jest starting');
  });

  //clean up database here
  beforeEach(async done => {
    await dropCollection(User);
    done();
  });

  //close the server
  afterAll(async done => {
    await server.close();
    console.log('server closed!');
  });

  test('create a user', async done => {
    const response = await postRequest(createdRequest, '/users/', newUser);
    const parsed = parseJson(response.text);
    expect(parsed.message).toBe('Successfully created a user.');
    done();
  });

  test('login a user', async done => {
    await postRequest(createdRequest, '/users/', newUser);
    const response = await getRequest(createdRequest, '/users/signIn', loginUserInput);
    console.log(response.body.user);
    expect(response.status).toBe(SUCCESS);
    expect(response.body.user).toEqual(foundUser);
    done();
  });

  test('receive a message indicating bad login attempt', async done => {
    await postRequest(createdRequest, '/users/', newUser);
    const response = await getRequest(createdRequest, '/users/signIn', badLoginUserInput);
    console.log(response.body);
    expect(response.status).toBe(BAD_REQUEST);
    expect(response.body).toEqual({ error: 'Password does not match.' });
    done();
  });

  test('receive error message from bad user input when creating a user.', async done => {
    const response = await postRequest(createdRequest, '/users/', badUserInput);
    expect(response.status).toBe(UNPROCESSABLE_ENTITY);
    expect(response.text).toBe('{"error":"You are missing required fields"}');
    done();
  });
});





































//Thanks James
