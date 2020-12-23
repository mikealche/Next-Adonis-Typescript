import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
  public async me({ auth }: HttpContextContract): Promise<User> {
    const user = await auth.authenticate()
    return user
  }
}
