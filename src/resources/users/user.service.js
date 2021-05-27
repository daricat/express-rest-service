const { usersDB } = require('./user.memory.repository');
const User = require('./user.model');

/**
 * @function getAllUsers
 * @description -- calls method from class [UserDB]{@link boardDB} to get all users
 * @return {Promise<User[]>}
 */
const getAllUsers = () => usersDB.getAllUsers().map((user) => User.toResponse(user));

/**
 * @function getUserbyId
 * @description -- calls method from class [UserDB]{@link boardDB} to get user by id
 * @param {string} id
 * @return {Promise<User>}
 */
const getUserbyId = (id) => User.toResponse(usersDB.getUserById(id));

/**
 * @function addUser
 * @description -- calls method from class [UserDB]{@link boardDB} to add user
 * @param {UserInfo} user
 * @return {Promise<User>}
 */
const addUser = (user) => User.toResponse(usersDB.addUser(new User(user)));

/**
 * @function updateUser
 * @description -- calls method from class [UserDB]{@link boardDB} to update user
 * @param {string} id
 * @param {UserInfo} fields
 * @return {Promise<User>}
 */
const updateUser = (id, fields) => User.toResponse(usersDB.updateUser(id, fields));

/**
 * @function deleteUser
 * @description -- calls method from class [UserDB]{@link boardDB} to delete user
 * @param {string} id
 * @return {Promise}
 */
const deleteUser = (id) => usersDB.deleteUser(id);

module.exports = { getAllUsers, getUserbyId, addUser, updateUser, deleteUser };
