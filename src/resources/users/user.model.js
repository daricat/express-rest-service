const uuid = require('uuid').v4;

/** Type definition for User.
 * @typedef {Object} UserInfo
 * @property {string} id
 * @property {string} name
 * @property {string} login
 * @property {string} password
 */

/** Type definition for User.
 * @typedef {Object} User
 * @param {UserInfo} [userInfo={}] -- information about user
 * @property {string} [id=uuid()]
 * @property {string} [name='USER']
 * @property {string} [login='user']
 * @property {string} [password='P@55w0rd']
 */

class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * @method toResponse
   * @static
   * @description -- hide user password
   * @param {User} user
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
