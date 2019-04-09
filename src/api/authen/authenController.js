
/* สำหรับจัดการฟังก์ชั่น */
import knex from '../../knex/index'
import { err, debug } from '../../config/debug';
import authenModel from './authenModel';
import { success, failed } from '../../config/response'

class authenController {
    async getUser(req, res) {
        try {
            let result = await authenModel.getUserAll({ user_id: 1 });
            success(res, result)
            debug(result)
        } catch (error) {
            err(error, req.originalUrl)
            failed(res, "get user error");
        }
    }

    async insertUser(req, res) {
        try {

            success(res, '')
        } catch (error) {
            err(error.message, req.originalUrl);
            failed(res, '')
        }
    }
}

export default new authenController()