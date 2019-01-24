/* สำหรับเชื่อมต่อ Database */
import knex from '../../knex/index'

class authenModel {
    registerAuth() {
        return knex('').insert()
    }

    loginAuth({ }) {

    }

    getUserAll({ user_id }) {
        return knex('tbl_user')
            .select()
            .where({ user_id });
    }
}

export default new authenModel()