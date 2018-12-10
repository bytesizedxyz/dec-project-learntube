// app is the instantiated express app
// route should be a string i.e. "/chirp"
// input is an object literal
const getRequest = async (app, route, input) => {
  const response = await app
    .get(route)
    .set('Accept', 'application/json')
    .send(input);
  return response;
};

const postRequest = async (app, route, input) => {
  const response = await app
    .post(route)
    .set('Accept', 'application/json')
    .send(input);
  return response;
};

const putRequest = async (app, route, input) => {
  const response = await app.put(route).send(input);
  return response;
};

const getRequestWithHeaders = async (app, route, token) => {
  const response = await app
    .get(route)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`);
  return response;
};

const postRequestWithHeaders = async (app, route, token, input = null) => {
  const response = await app
    .post(route)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send(input);
  return response;
};

const putRequestWithHeaders = async (app, route, token, input = null) => {
  const response = await app
    .put(route)
    .set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
    .send(input);
  return response;
};

const dropCollection = async Knex => {
  await Knex('users')
    .del()
    .catch(err => {
      if (err !== null) {
        console.log(`${Knex} Collection Drop Error: `, err);
      }
    });
};

const parseJson = (string, debug = false) => {
  if (debug) {
    console.log('The passed in string: ', string);
  }
  const parsed = JSON.parse(string);
  if (debug) {
    console.log('The parsed JSON: ', parsed);
  }
  return parsed;
};

module.exports = {
  getRequest,
  postRequest,
  putRequest,
  getRequestWithHeaders,
  postRequestWithHeaders,
  putRequestWithHeaders,
  dropCollection,
  parseJson
};
