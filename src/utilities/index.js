/* eslint-disable require-jsdoc */
export default class Utils {
  constructor() {
    this.statusCode = null;
    this.type = null;
    this.data = null;
    this.message = null;
  }

  setSuccess(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.type = 'success';
  }

  setError(statusCode, message) {
    this.statusCode = statusCode;
    this.type = 'error';
    this.message = message;
  }

  send(res) {
    const result = { status: this.type,
      message: this.message,
      data: this.data, };
    console.log('usr', result);
    if (this.type === 'success') {
      return res.status(this.statusCode).json(result);
    }
    return res.status(this.statusCode).json({ status: this.type,
      message: this.messsage });
  }
}
