declare module '@ioc:Adonis/Core/Env' {
    type CustomTypes = typeof import('../env').default;
    interface EnvTypes extends CustomTypes {
    }
}
