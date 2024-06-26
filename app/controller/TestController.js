const TestController = {};

TestController.test = async (req, res) => {
    console.log("req.query:" + JSON.stringify(req.query, null, 4));
    console.log("req.body:" + JSON.stringify(req.body, null, 4));
    console.log("req.params:" + JSON.stringify(req.params, null, 4));
    // res.json({"node": "172.16.9.148", status: "active"});
    res.makeResObj("500", "", {"node": "172.16.9.148", status: "active"});
}


TestController.urlDemo1 = async (req, res) => {
    console.log("req.paramsObj:" + JSON.stringify(req.paramsObj, null, 4));
    res.json({"userId": "172.16.9.148", status: "active"});
}

TestController.sseTest = async (req, res) => {
    res.header({
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
    });
    res.write("data: " + (new Date()) + "\n\n");
    setInterval(() => {
        res.write("data: " + (new Date()) + "\n\n");
    }, 1000);
}

module.exports = TestController;
