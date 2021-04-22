import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class TodoSeeder extends BaseSeeder {
  public async run() {
    const user = await User.first()
    user?.related('todos').createMany([
      {
        text: 'Start project',
      },
      {
        text: 'Push to github',
      },
      {
        text: 'Deploy to production',
      },
    ])
  }
}
