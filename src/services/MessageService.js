/* eslint-disable require-jsdoc */
/* eslint-disable no-useless-catch */
import db from '../models';

class MessageService {
  static async getAllMessages() {
    try {
      return await db.Messages.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async createMessage(newMessage) {
    try {
      return await db.Messages.create(newMessage);
    } catch (error) {
      throw error;
    }
  }
}

export default MessageService;
