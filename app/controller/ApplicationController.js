const ApplicationController = {};
ApplicationController.getNotify = async (req, res) => {
    res.send([{
        "notifyTime": "2021-09-24 15:28:20",
        "server_id": "taf.tafAlarmWeb_172.16.8.124",
        "thread_id": "",
        "command": "[alarm]",
        "result": "[alarm] exiting,exception occurred more than 2 times within 10 seconds"
    }, {
        "notifyTime": "2021-09-24 15:28:20",
        "server_id": "taf.tafAlarmWeb_172.16.8.124",
        "thread_id": "",
        "command": "[alarm]",
        "result": "[alarm] exiting,exception occurred more than 2 times within 10 seconds"
    }]);
}

module.exports = ApplicationController;
