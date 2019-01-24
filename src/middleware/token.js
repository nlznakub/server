import jsonwebtoken from 'jsonwebtoken'
import { failed } from '../config/response';
import { err, debug } from '../config/debug';


export const validate_token = () => {
    return (req, res, next) => {
        if (req.headers && req.headers.authorization) {
            jsonwebtoken.verify(req.headers.authorization, process.env.SIGN, (error, decode) => {
                if (error) {
                    err('token not found', req.originalUrl)
                    failed(res, 'token not found')
                } else {
                    // value = 
                    debug(req.session.token)
                    next();
                }
            })
        } else if (req.session.token) {
            jsonwebtoken.verify(req.session.token, process.env.SIGN, (err, decode) => {
                if (err) {
                    err('token not found', req.originalUrl)
                    failed(res, 'token not found')
                } else {
                    // value = 
                    debug(req.session.token)
                    next();
                }
            })
        } else {
            req.session.token = null;
            err('token not found', req.originalUrl)
            failed(res, 'token invalidate');
        }
    }
}