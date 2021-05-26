class UsersDB {
  constructor() {
    this.users = [];
  }

  add(user) {
    this.users.push(user);
    return user;
  }

  getAllUsers() {
    return this.users;
  }

  getUserById(id) {
    const foundUserIndex = this.users.find((user) => user.id === id);

    if (!foundUserIndex) throw new Error(`The user with ${id} doesn't found!`);
    
    return foundUserIndex;
  }

  updateUser(id, updateFields) {
    const user = this.getUserById(id);

    Object.entries(updateFields).forEach(([key, value]) => {
      user[key] = value;
    });

    return user;
  }

  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

const usersDB = new UsersDB();

module.exports = { usersDB };
