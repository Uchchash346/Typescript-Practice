import { Player } from './classes/Player.js';

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Sakib', 38, 'Bangladesh');

console.log(mashrafi.age)
const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);