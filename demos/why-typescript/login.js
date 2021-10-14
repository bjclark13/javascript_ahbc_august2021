"use strict";
exports.__esModule = true;
function login(user, password, rememberMe) {
    var hello = '123';
    if (user.password === password) {
        return {
            firstName: user.firstName,
            lastName: user.lastName,
            lastLoggedIn: new Date(),
            groups: [],
            rememberMe: new Date().setDate(new Date().getDate() + rememberMe)
        };
    }
}
var sayHello = function (hello) {
    console.log(hello !== null && hello !== void 0 ? hello : 'hello!');
};
sayHello(null);
exports["default"] = login;
