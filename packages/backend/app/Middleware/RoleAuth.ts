import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
/**
 * Silent auth middleware can be used as a global middleware to silent check
 * if the user is logged-in or not.
 *
 * The request continues as usual, even when the user is not logged-in.
 */
export default class RoleAuthMiddleware {
  /**
   * Handle request
   */
  public async handle({ auth }: HttpContextContract, next: () => Promise<void>, roles: string[]) {
    /**
     * Check if user is logged-in or not. If yes, then `ctx.auth.user` will be
     * set to the instance of the currently logged in user.
     */

    const user = await auth.authenticate()
    if (!roles.includes(user.role)) {
      throw new Error('Permission denied')
    }
    await next()
  }
}
