class HttpException extends Error {
  status: number;
  message: string;
  constructor (status: number, message: string) {
    super(message)
    this.status = status
    this.message = message
  }

  static badRequest (msg: string): HttpException {
    return new HttpException(400, msg)
  }
}

export default HttpException
