// const MovingObject = require('./moving_object');
import MovingObject from './moving_object';
window.MovingObject = MovingObject;

import Circle from './circle';
window.Circle = Circle;

import GameView from './game_view';
window.GameView = GameView;

import Rectangle from './rectangle';
window.Rectangle = Rectangle;

import TaskSpace from './task_space';
window.TaskSpace = TaskSpace;

// to do: connect w/ actual canvas element
const SCR_W = 600;
const SCR_H = 500;

// let mo = new MovingObject({pos: [250, 250], vel: [10, 10], color: "#00FFFF"});
let circ = new Circle({pos: [SCR_W/2, SCR_H/2], vel: [16, 16], radius: 12, color: "#0000FF"});

// ENVIRIONMENT (RECTANGLES)
let rect1 = new Rectangle([150, 400, 500, 450]);
let rect2 = new Rectangle([450, 150, 500, 450]);
let rect3 = new Rectangle([86, 160, 150, 450]);

let rect4 = new Rectangle([400, 20, 900, 80]);

let rect5 = new Rectangle([800, 800, 1100, 860]);
let rect6 = new Rectangle([1040, 600, 1100, 860]);

const env = [rect1, rect2, rect3, rect4, rect5, rect6];


// TASK SPACES
let task1 = new TaskSpace([400,350,460,410]);

const tasks = [task1];


const DIRS = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0]
}

let [x, y] = [circ.pos[0], circ.pos[1]];
function getCurrentPos() {  // put in circle class
    return [circ.pos[0], circ.pos[1]];
}

let scrX1, scrY1, scrX2, scrY2;

function updateScreenCoords(ctx) {
    [x, y] = [circ.pos[0], circ.pos[1]];

    scrX1 = x - SCR_W/2;
    scrY1 = y - SCR_H/2;
    scrX2 = x + SCR_W/2;
    scrY2 = y + SCR_H/2;

    console.log(`(${scrX1}, ${scrY1}), (${scrX2}, ${scrY2})`);

    // draw a rectangle (no fill) for the screen
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(scrX1, scrY1, SCR_W, SCR_H);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("its up and running");
    console.log(`env inside: ${env}`);
    
    const canvas = document.getElementById("my-canvas");
    const ctx = canvas.getContext("2d");
    
    circ.draw(ctx); 

    // const gm = new Game();
    // const gv = new GameView(undefined, ctx, circ);
    
    for (const taskSpace of tasks)
        taskSpace.draw(ctx);

    for(const rect of env)
        rect.draw(ctx);

    // MOVING LOGIC
    document.addEventListener('keydown', function(e) {
        // 'e' is an event object with a 'key' property

        let [velX, velY] = circ.vel;
        let offset;

        switch(e.key) {
            case "ArrowUp": 
               // shift environment down by offset
               // circle position stays the same
               // redraw the current environment
                offset = [DIRS.up[0] * velX, DIRS.up[1] * velY];
                break;
            case "ArrowDown": 
                offset = [DIRS.down[0] * velX, DIRS.down[1] * velY];
                break;
            case "ArrowLeft": 
                offset = [DIRS.left[0] * velX, DIRS.left[1] * velY];
                break;
            case "ArrowRight":
                offset = [DIRS.right[0] * velX, DIRS.right[1] * velY];
                break;

            case " ":
                if(detectTaskCollisions(circ)) {
                    console.log("TASK INITIATED!");
                }
            
            default: 
                console.log(e.key);
                offset = [0,0];
                break;
        }
        // console.log("OFFSET: " + offset);
        shiftEnvironment(...offset);

        if(detectCollisions(circ)) {
            offset = [-offset[0], -offset[1]];
            shiftEnvironment(...offset);
        }

        detectTaskCollisions(circ)

        // REDRAW THE MAP
        drawMap(ctx);
    });


})

function drawMap(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 600, 500);
    circ.draw(ctx);

    // REDRAW THE TASK SPACES
    let curTS;
    for(let t in tasks) {  
        curTS = tasks[t];
        curTS.draw(ctx);
    }

    // REDRAW THE RECTANGLES
    let curRect;
    for(let r in env) {  
        curRect = env[r];
        curRect.draw(ctx);
    }

    circ.draw(ctx);
}


function shiftEnvironment(offsetX, offsetY) {
    /*
    Shift every element in the game by a certain amount,
    depending on where the screen's coordinate are (with 
    respect to (0,0)). Then, once shifted, drawing the screen
    should make it look like the background moved.
    */

    // all rectangles will get shifted
    let curRect;
    let curRectX, curRectY, curRectX2, curRectY2;
    for(let r in env) {
        curRect = env[r];

        curRectX = curRect.coords[0];
        curRectY = curRect.coords[1];
        curRectX2 = curRect.coords[2];
        curRectY2 = curRect.coords[3];

        curRect.coords[0] = curRectX - offsetX;
        curRect.coords[1] = curRectY - offsetY;
        curRect.coords[2] = curRectX2 - offsetX;
        curRect.coords[3] = curRectY2 - offsetY;
    }

    // all task spaces will get shifted
    let curTaskSpace;
    let curX, curY, curX2, curY2;
    for(let t in tasks) {
        curTaskSpace = tasks[t];

        curX = curTaskSpace.coords[0];
        curY = curTaskSpace.coords[1];
        curX2 = curTaskSpace.coords[2];
        curY2 = curTaskSpace.coords[3];

        curTaskSpace.coords[0] = curX - offsetX;
        curTaskSpace.coords[1] = curY - offsetY;
        curTaskSpace.coords[2] = curX2 - offsetX;
        curTaskSpace.coords[3] = curY2 - offsetY;
    }
}

function detectCollisions(circ) {

    // broken edge case: if circle velocity is too big, it can jump over rectangles

    let curRect;
    for(let r in env) {
        curRect = env[r];
        if(circ.isCollidedWith(curRect)) {   // if collision
            console.log("Collision");
            // circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)
            return true;
        }
    }

    return false;
}

function detectTaskCollisions(circ) {
    let curTS;
    for(let t in tasks) {
        curTS = tasks[t];
        if(circ.isCollidedWith(curTS)) {   // if collision
            console.log("Collision with task space");
            // circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)
            return true;
        }
    }

    return false;
}

function moveCircle(circ, dir) {

    // to do?: check if the position + dir puts in collision
    // if so, return early, else, move

    // to do?: check collision pased off of entire shape,
    // not just center of circle

    circ.moveInDir(dir);  //try to move circle

    let curRect;
    for(let r in env) {
        curRect = env[r];
        if(circ.isCollidedWith(curRect)) {   // if collision
            console.log("Collision");
            // circ.moveInDir([-dir[0], -dir[1]]);  // move it back (in the opp direction)
            return;
        }
    }

    // circ.moveInDir(dir);
}



