import { OpaqueTokenContract } from '@ioc:Adonis/Addons/Auth'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async me({ auth }: HttpContextContract): Promise<User> {
    const user = await auth.use('api').authenticate()
    return user
  }
  public async signup({
    auth,
    request,
  }: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {
    const validated = await request.validate({
      schema: schema.create({
        email: schema.string({}, [
          rules.email(),
          rules.unique({ table: 'users', column: 'email' }),
        ]),
      }),
      messages: {
        'email.unique': 'Email already exists',
      },
    })
    console.log({ validated })

    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({ email, password })
    const token = await auth.use('api').login(user)
    return token
  }
  public async login({
    auth,
    request,
  }: HttpContextContract): Promise<ReturnType<OpaqueTokenContract<User>['toJSON']>> {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)
    return token
  }
}
