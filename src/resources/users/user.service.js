const { usersDB } = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersDB.getAllUsers().map((user) => User.toResponse(user));

const getUserbyId = (id) => User.toResponse(usersDB.getUserById(id));

const addUser = (user) => User.toResponse(usersDB.addUser(new User(user)));

const updateUser = (id, fields) => User.toResponse(usersDB.updateUser(id, fields));

const deleteUser = (id) => usersDB.deleteUser(id);

module.exports = { getAll, getUserbyId, addUser, updateUser, deleteUser };
