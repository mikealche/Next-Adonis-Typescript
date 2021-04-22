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
}
