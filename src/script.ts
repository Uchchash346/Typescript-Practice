import { Player } from './classes/Player.js';
import { isPlayer } from './interfaces/isPlayer.js'
const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');

let sakib: isPlayer;
sakib = new Player('Sakib', 40, 'Bangladesh');

console.log(mashrafi.age)
const players: isPlayer[] = [];

players.push(sakib);
players.push(mashrafi);


// Interface 

interface RectangleOptions {
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}

let threeDOptions = ({
    width: 30,
    length: 20,
    height: 50,
});
drawRectangle(threeDOptions)