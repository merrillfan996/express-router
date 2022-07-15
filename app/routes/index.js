let express = require('express');
const {apiConf} = require("./routerConf")
let {paramsDealMiddleware} = require("../../middleware/paramsMiddleware");

const getRouter = (router, routerConf, prefix) => {
    routerConf.forEach(function (conf) {
        let [method, suffixUrl, controller] = conf;
        let url = prefix + suffixUrl

        router[method](url, paramsDealMiddleware);

        //业务逻辑控制器
        router[method](url, async (req, res, next) => {
            await controller.call({}, req, res, next);
            await next();
        });

    });
};

const apiRouter = new express.Router()
getRouter(apiRouter, apiConf, "/page/api");

// const k8sRouter = new express.Router()
// getRouter(k8sRouter, apiConf, "/page/api/k8s");

module.exports = {apiRouter}
