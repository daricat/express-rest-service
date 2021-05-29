import UserModel from './user.model';
/**
 * Creates a new UserDB.
 * @class
 * @constructor
 * @public
 * @property {User[]} users - stores all created users
 */

class UsersDB {
  users: UserModel[];

  constructor() {
    this.users = [];
  }

  /**
   * @method addUser
   * @description -- add new user in this.users store
   * @param {UserModel} user
   * @return {UserModel} -- new User exemplar
   */
  addUser(user: UserModel) {
    this.users.push(user);
    return user;
  }

  /**
   * @method getAllUsers
   * @description -- return all stored boards
   * @return {UserModel[]}
   */
  getAllUsers(): UserModel[] {
    return this.users;
  }

  /**
   * @method getUserById
   * @description -- get user by id
   * @param {string} id
   * @return {UserModel}
   */
  getUserById(id?: string): UserModel {
    const foundUserIndex = this.users.find((user) => user.id === id);

    if (!foundUserIndex) throw new Error(`The user with ${id} doesn't found!`);

    return foundUserIndex;
  }

  /**
   * @method updateUser
   * @description -- update user by id
   * @param {string} id
   * @param {UserModel} updateFields
   * @return {UserModel}
   */
  updateUser(id: string, updateFields: UserModel): UserModel {
    const user = this.getUserById(id);

    Object.entries(updateFields).forEach(([key, value]) => {
      Object.defineProperty(user, key, { value });
    });

    return user;
  }

  /**
   * @method deleteUser
   * @description -- delete user by id
   * @param {string} id
   * @return {undefined}
   */
  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

/**
 * @type {UsersDB}
 */
const usersDB = new UsersDB();

export default usersDB;
