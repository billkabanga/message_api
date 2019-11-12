/* eslint-disable no-useless-catch */
/* eslint-disable require-jsdoc */
import db from '../models';

export default class UserService {
  static async getAllUsers() {
    try {
      return await db.user.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async createUser(newUser) {
    try {
      return await db.user.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async getSingleUser(email) {
    try {
      return await db.user.findOne({ where: { email: String(email) } });
    } catch (error) {
      throw error;
    }
  }
}
