import { createConnection } from 'typeorm';
import User from './entity/User';
createConnection().then(async connection => {
    const user = new User();
    user.name = 'John';

    await connection.manager.save(user);
});