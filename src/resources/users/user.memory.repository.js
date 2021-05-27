/**
 * Creates a new UserDB.
 * @class
 * @constructor
 * @public
 * @property {User[]} users - stores all created users
 */

class UsersDB {
  constructor() {
    this.users = [];
  }

  /**
   * @method addUser
   * @description -- add new user in this.users store
   * @param {User} user
   * @return {User} -- new User exemplar
   */
  addUser(user) {
    this.users.push(user);
    return user;
  }

  /**
   * @method getAllUsers
   * @description -- return all stored boards
   * @return {User[]}
   */
  getAllUsers() {
    return this.users;
  }

  /**
   * @method getUserById
   * @description -- get user by id
   * @param {string} id
   * @return {User}
   */
  getUserById(id) {
    const foundUserIndex = this.users.find((user) => user.id === id);

    if (!foundUserIndex) throw new Error(`The user with ${id} doesn't found!`);

    return foundUserIndex;
  }

  /**
   * @method updateUser
   * @description -- update user by id
   * @param {string} id
   * @param {User} updateFields
   * @return {User}
   */
  updateUser(id, updateFields) {
    const user = this.getUserById(id);

    Object.entries(updateFields).forEach(([key, value]) => {
      user[key] = value;
    });

    return user;
  }

  /**
   * @method deleteUser
   * @description -- delete user by id
   * @param {string} id
   * @return {undefined}
   */
  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

/**
 * @type {UsersDB}
 */
const usersDB = new UsersDB();

module.exports = { usersDB };
