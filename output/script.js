"use strict";
var myFunc = function (a, b, c) {
    if (c === void 0) { c = "True"; }
    console.log(c);
    console.log("Hello " + a + " " + b);
};
myFunc("A", "B", "false");
