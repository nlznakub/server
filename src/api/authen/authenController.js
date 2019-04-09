
/* สำหรับจัดการฟังก์ชั่น */
import knex from '../../knex/index'
import { err, debug } from '../../config/debug';
import authenModel from './authenModel';
import { success, failed } from '../../config/response'

class authenController {
    async getUserAll(req, res) {
        try {
            let result = await authenModel.getUserAll();
            success(res, result)
        } catch (error) {
            err(error, req.originalUrl)
            failed(res, "get user error");
        }
    }

    async getUser(req, res) {
        throw ("hello");
        try {

            const { user_id } = req.body;
            let result = await authenModel.getUser({ user_id });
            success(res, result)
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