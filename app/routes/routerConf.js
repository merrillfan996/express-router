const ApplicationAction = require("../controller/ApplicationController")
const TestController = require("../controller/TestController")

const apiConf = [
    //业务1
    ['get', '/get_notify', ApplicationAction.getNotify],

    //业务2
    ['post', '/test', TestController.test],
    ['get', '/test', TestController.test],
    ['get', '/users/:userId/book/:bookId', TestController.urlDemo1],
    ['get', '/sse', TestController.sseTest]
];

module.exports = {apiConf}
