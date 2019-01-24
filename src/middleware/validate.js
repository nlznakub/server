import { validationResult } from 'express-validator/check';
import { failed } from '../config/response';

export const validate = () => (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return failed(res, error.array()[0].msg);
    }

    next()
}