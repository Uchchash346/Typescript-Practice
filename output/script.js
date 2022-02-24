"use strict";
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log(this.name + " from " + this.country + " is playing!");
    };
    return Player;
}());
var mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
var sakib = new Player('Sakib', 38, 'Bangladesh');
console.log(mashrafi);
var players = [];
players.push(sakib);
players.push(mashrafi);
