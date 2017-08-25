var variable = 'kevin';
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'what is up'; }
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello ');
//# sourceMappingURL=mygik.js.map