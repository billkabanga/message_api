/* eslint-disable require-jsdoc */
import UserService from '../services/UserService';
import Utils from '../utilities';

const utils = new Utils();

export default class UserController {
  static async createUser(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
      utils.setError(400, 'Please provide complete details!');
      return utils.send(res);
    }

    const newUser = req.body;
    try {
      const createdUser = await UserService.createUser(newUser);
      utils.setSuccess(201, 'User created', createdUser);
      return utils.send(res);
    } catch (error) {
      utils.setError(400, error.message);
      return utils.send(res);
    }
  }
}
