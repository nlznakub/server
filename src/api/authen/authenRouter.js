import { Router } from 'express';
import { check } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';
import authenController from './authenController';
import { validate } from '../../middleware/validate';
import { validate_token } from '../../middleware/token';
const route = Router();

route.post('/getUser',
    // validate_token(),
    // [
    //     check('user_id').isNumeric().withMessage('user_id not found')
    // ],
    // validate(),
    authenController.getUser
)


export default route;