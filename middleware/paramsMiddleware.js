const _ = require('lodash');
//api入参出参中间件

const paramsDealMiddleware = async (req, res, next) => {
    let params = _.extend(req.query || {}, req.body || {}, req.params || {});
    req.paramsObj = params;

    res.makeResObj = (retCode, errMsg, result) => {
        result = result == undefined ? {} : result;
        res.json = {data: result, ret_code: retCode, err_msg: errMsg};
    };
    res.makeErrResObj = () => {
        res.json = {data: {}, ret_code: 500, err_msg: "系统错误"};
    };
    res.makeNotAuthResObj = () => {
        res.json = {data: {}, ret_code: 500, err_msg: '权限不足'};
    };
    await next();
    await next();
};

module.exports = {paramsDealMiddleware}
