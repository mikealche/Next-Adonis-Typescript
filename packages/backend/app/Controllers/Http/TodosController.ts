import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from '../../Models/Todo'

export default class TodosController {
  public async getForUser({ auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    const todos = await Todo.findBy('user_id', user.id)
    return todos
  }

  public async index() {
    return Todo.all()
  }

  public async own({ auth }: HttpContextContract) {
    const user = auth.user
    const todos = await user?.related('todos').query()
    return todos
  }

  public async create({ auth, request }: HttpContextContract) {
    const { text } = request.all()
    const user = auth.user
    const todos = await user?.related('todos').create({
      text,
    })
    return todos
  }

  public async delete({ auth, request }: HttpContextContract) {
    const { id } = request.all()
    const user = auth.user!
    await Todo.query().where({ id, user_id: user.id }).delete()
  }
}
