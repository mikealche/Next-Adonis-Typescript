import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.updateOrCreateMany('email', [
      {
        email: 'admin@example.com',
        password: 'admin',
        role: 'admin',
      },
      {
        email: 'test@test.com',
        password: 'supersecret',
      },
    ])
  }
}
