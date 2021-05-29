import userDB from './user.memory.repository';
import UserModel from './user.model';

/**
 * @function getAllUsers
 * @description -- calls method from class [UserDB]{@link boardDB} to get all users
 * @return {Promise<User[]>}
 */
const getAllUsers = () => userDB.getAllUsers().map((user) => UserModel.toResponse(user));

/**
 * @function getUserbyId
 * @description -- calls method from class [UserDB]{@link boardDB} to get user by id
 * @param {string} id
 * @return {Promise<User>}
 */
const getUserbyId = (id: string) => UserModel.toResponse(userDB.getUserById(id));

/**
 * @function addUser
 * @description -- calls method from class [UserDB]{@link boardDB} to add user
 * @param {UserInfo} user
 * @return {Promise<User>}
 */
const addUser = (user: UserModel) =>
  UserModel.toResponse(userDB.addUser(new UserModel(user)));

/**
 * @function updateUser
 * @description -- calls method from class [UserDB]{@link boardDB} to update user
 * @param {string} id
 * @param {UserInfo} fields
 * @return {Promise<User>}
 */
const updateUser = (id: string, fields: UserModel) =>
  UserModel.toResponse(userDB.updateUser(id, fields));

/**
 * @function deleteUser
 * @description -- calls method from class [UserDB]{@link boardDB} to delete user
 * @param {string} id
 * @return {Promise}
 */
const deleteUser = (id: string) => userDB.deleteUser(id);

export {getAllUsers, getUserbyId, addUser, updateUser, deleteUser};
