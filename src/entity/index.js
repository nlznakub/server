import { createConnection } from 'typeorm';
import { debug, err } from '../config/debug';
export default async () => {
    try {
        await createConnection();
        debug('create table success')
    } catch (error) {
        err('create table fail', error.message)
    }
}