import { Request, Response } from 'express'

export abstract class BaseController {
  protected abstract handler (request: Request, response: Response):Promise<void>

  public async execute (
    req: Request, res: Response
  ): Promise<void> {
    try {
      await this.handler(req, res)
    } catch (err) {
      this.fail(res, 'An unexpected error occurred')
    }
  }

  public static jsonResponse (res: Response, code: number, message: string): Response {
    return res.status(code).json({ message })
  }

  public clientError (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 400, message || 'Unauthorized')
  }

  public unauthorized (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 401, message || 'Unauthorized')
  }

  public paymentRequired (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 402, message || 'Payment required')
  }

  public forbidden (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 403, message || 'Forbidden')
  }

  public notFound (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 404, message || 'Not found')
  }

  public conflict (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 409, message || 'Conflict')
  }

  public tooMany (res: Response, message?: string): Response {
    return BaseController.jsonResponse(res, 429, message || 'Too many requests')
  }

  public fail (res: Response, error: Error | string): Response {
    return res.status(500).json({
      message: error.toString()
    })
  }
}
