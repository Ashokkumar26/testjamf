"use strict";
exports.__esModule = true;
exports.getGroupsByName = void 0;
var axios_1 = require("axios");
exports.getGroupsByName = function (mainUrl, groupName, username, password) {
    return axios_1["default"].get(mainUrl + "/JSSResource/usergroups/name/" + groupName, {
        auth: { username: username, password: password }
    });
};
