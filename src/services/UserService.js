/* eslint-disable no-useless-catch */
/* eslint-disable require-jsdoc */
import db from '../models';

class UserService {
  static async getAllUsers() {
    try {
      return await db.User.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser) {
    try {
      return await db.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getSingleUser(email) {
    try {
      return await db.User.findOne({ where: { email: String(email) } });
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
