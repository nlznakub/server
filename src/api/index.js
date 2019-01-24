import authenRouter from './authen/authenRouter';

export const createApi = (app, version) => {
    app.use(version + '/auth', authenRouter)
}