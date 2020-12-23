import { OpaqueTokenContract } from '@ioc:Adonis/Addons/Auth'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'

export default class AuthController {
  public async me({ auth }: HttpContextContract): Promise<User> {
    const user = await auth.authenticate()
    return user
  }
  public async signup({
    auth,
    request,
  }: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {
    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({ email, password })
    const token = await auth.use('api').login(user)
    return token
  }
}
