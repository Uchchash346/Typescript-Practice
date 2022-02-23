"use strict";
var userDetails = function (id, user) {
    console.log("User id is " + id + ", name is " + user.name + " and age is " + user.age);
};
var sayHello = function (user) {
    console.log("Hello " + (user.age > 50 ? "Sir" : "Mr.") + " " + user.name);
};
