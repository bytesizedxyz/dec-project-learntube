const Auth = require('../../services/Auth');
const unHashed = 'aPassword';
const foundUserWithPassword = {
  username: 'userName',
  email: 'email',
  is_admin: true
};
const foundUserWithOutPassword = {
  username: 'userName',
  email: 'email',
  is_admin: true
};
describe('it can pass the functions in the auth files', () => {
  it('can hash a password and unhash', async () => {
    const hashed = await Auth.hashPassword(unHashed);
    foundUserWithPassword.password = hashed;
    const response = await Auth.checkPassword(unHashed, foundUserWithPassword);
    expect(response.user).toEqual(foundUserWithOutPassword);
  });
});
