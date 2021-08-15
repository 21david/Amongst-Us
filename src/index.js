// const MovingObject = require('./moving_object');
import MovingObject from './moving_object';
window.MovingObject = MovingObject;

import Circle from './circle';
window.Circle = Circle;

import GameView from './game_view';
window.GameView = GameView;

import Rectangle from './rectangle';
window.Rectangle = Rectangle;

// let mo = new MovingObject({pos: [250, 250], vel: [10, 10], color: "#00FFFF"});
let circ = new Circle({pos: [300, 200], vel: [12, 12], radius: 12, color: "#0000FF"});

let rect1 = new Rectangle([150, 400, 500, 450]);
let rect2 = new Rectangle([450, 150, 500, 450]);
let rect3 = new Rectangle([86, 160, 150, 450]);
let rect4 = new Rectangle([400, 20, 900, 80]);

let rect5 = new Rectangle([800, 800, 1100, 860]);
let rect6 = new Rectangle([1040, 600, 1100, 860]);

const env = [rect1, rect2, rect3, rect4, rect5, rect6];

const DIRS = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0]
}

let [x, y] = [circ.pos[0], circ.pos[1]];

const SCR_W = 600;
const SCR_H = 500;

let scrX1, scrY1, scrX2, scrY2;

function updateScreenCoords() {
    [x, y] = [circ.pos[0], circ.pos[1]];

    scrX1 = x - SCR_W/2;
    scrY1 = y - SCR_H/2;
    scrX2 = x + SCR_W/2;
    scrY2 = y + SCR_H/2;

    console.log(`(${scrX1}, ${scrY1}), (${scrX2}, ${scrY2})`);

    // draw a rectangle (no fill) for the screen
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("its up and running");
    console.log(`env inside: ${env}`);
    
    const canvas = document.getElementById("my-canvas");
    const ctx = canvas.getContext("2d");
    
    circ.draw(ctx); 

    // const gm = new Game();
    // const gv = new GameView(undefined, ctx, circ);

    for(let r in env) {
        const curRect = env[r];
        curRect.draw(ctx);
    }

    // MOVING LOGIC
    document.addEventListener('keydown', function(e) {
        // 'e' is an event object with a 'key' property

        switch(e.key) {
            case "ArrowUp": moveCircle(circ, DIRS.up);
                break;
            case "ArrowDown": moveCircle(circ, DIRS.down);
                break;
            case "ArrowLeft": moveCircle(circ, DIRS.left);
                break;
            case "ArrowRight": moveCircle(circ, DIRS.right);
                break;
        }

        // REDRAW THE MAP
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 600, 500);
        circ.draw(ctx);
        // redraw rectangles
        for(let r in env) {  
            const curRect = env[r];
            curRect.draw(ctx);
        }
        // update screen coords
        updateScreenCoords();
    });


})

function moveCircle(circ, dir) {

    // to do?: check if the position + dir puts in collision
    // if so, return early, else, move

    // to do?: check collision pased off of entire shape,
    // not just center of circle

    circ.moveInDir(dir);  //try to move circle

    for(let i in env) {
        const curRect = env[i];
        if(circ.isCollidedWith(curRect)) {   // if collision
            console.log("Collision");
            circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)
            return;
        }
    }

    // circ.moveInDir(dir);
}



