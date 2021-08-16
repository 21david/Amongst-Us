import TaskSpace from './task_space'
import {SCR_W, SCR_H} from './consts.js';

const DIRS = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0]
}

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.env = new Environment();
        this.plyr = new Player({
            pos: [SCR_W/2, SCR_H/2], 
            vel: [16, 16], 
            radius: 12, // am I using radius?
            color: "#0000FF"
        });

        this.tasksComplete = 0;
        this.curTask = 0;

        this.addKeyListener();
        this.addClickListener();
        this.initialDrawMap(ctx);

        this.mousePressed = false;
    }

    addKeyListener() {
        document.addEventListener('keydown', this.keyListenCode.bind(this));
    }

    // MOVING LOGIC 
    keyListenCode(e) {
        // 'e' is an event object with a 'key' property
        
        let [velX, velY] = this.plyr.vel;
        let offset;

        /* For movement, shift environment down by offset 
            (circle position stays the same)
            then redraw the current environment.   */
        switch(e.key) {
            case "ArrowUp": 
            case "w":
                offset = [DIRS.up[0] * velX, DIRS.up[1] * velY];
                break;
            
            case "ArrowDown": 
            case "s":
                offset = [DIRS.down[0] * velX, DIRS.down[1] * velY];
                break;
        
            case "ArrowLeft": 
            case "a":
                offset = [DIRS.left[0] * velX, DIRS.left[1] * velY];
                break;
            
            case "ArrowRight":
            case "d":
                offset = [DIRS.right[0] * velX, DIRS.right[1] * velY];
                break;

            case " ":
                let task = this.detectTaskCollisions(this.plyr);
                if(task) {
                    console.log("TASK INITIATED FOR TASK " + task);
                    this.curTask = task;
                }
                break;

            case "Escape":
            case "q":
                this.curTask = 0;
                break;

            case "c": 
                // completing task logic
                this.tasksComplete++;
                console.log("Completed task " + this.curTask + "!");
                this.curTask = 0;
                break;
            
            default: 
                console.log(e.key + " key pressed");
        }

        // if player moved, run this code
        if(offset) {
            this.env.shiftEnvironment(...offset);

            if(this.detectCollisions(this.plyr)) {
                offset = [-offset[0], -offset[1]];
                this.env.shiftEnvironment(...offset); // undo the shift
            }

            this.detectTaskCollisions(this.plyr);
        }

        if(this.tasksComplete == this.env.taskSpaces.length)
            console.log("Congratulations!! You completed all the tasks and saved the ship!");

        // REDRAW THE MAP
        this.drawMap(this.ctx);

    }

    addClickListener() {
        // let user close out of task screen,
        // click "use" button, "kill" button
        // open and close "tasks" sidebar
        // open settings (and chat?)
        
        // also logic for completing tasks

        
        document.addEventListener('mousedown', this.clickListenCode.bind(this));

        document.addEventListener('mouseup', () => {
            this.mousePressed = false;
            console.log("released");
        });
    }

    clickListenCode(e) {
        // console.log("Clicked");
        // console.log(e);
        // 'e' is a 'PointerEvent' object
        //      with a 'x' and 'y' properties
        //      'ctrlKey' and 'shiftKey'
        //      'path' array. if canvas was clicked, 
        //          path[0] === canvas (?)

        let [x, y] = [e.x, e.y];
        console.log(x + " " + y);

        this.mousePressed = true;
    }

    detectCollisions() {
         // broken edge case: if circle velocity is too big, it can jump over rectangles

        for(let curRect of this.env.rectangles) {
            if(this.plyr.isCollidedWith(curRect)) {   // if collision
                return true;
            }
        }

        return false;
    }

    detectTaskCollisions() {
        for(let curTS of this.env.taskSpaces) {
            if(this.plyr.isCollidedWith(curTS)) {   // if collision
                console.log("Collision with task space, task " + curTS.taskNum);
                return curTS.taskNum;
            }
        }
    
        return 0;
    }

    drawMap(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, SCR_W, SCR_H); // clear the screen
        // this.plyr.draw(ctx);

        // REDRAW THE TASK SPACES
        for(let taskSpace of this.env.taskSpaces)
            taskSpace.draw(ctx);

        // REDRAW THE RECTANGLES
        for(let rect of this.env.rectangles) 
            rect.draw(ctx);

        // REDRAW THE PLAYER
        this.plyr.draw(ctx);

        // TASK INTERFACE DRAWING LOGIC
        if(this.curTask) {
            this.drawTaskScreen(ctx, this.curTask);
        }

    }

    drawTaskScreen(ctx, taskNum) {
        ctx.fillStyle = 'gray';
        ctx.fillRect(50, 50, SCR_W - 100, SCR_H - 100);

        ctx.font = '20px serif';
        ctx.fillStyle = 'black';
        ctx.fillText(TaskSpace.taskWords(this.curTask), 160, 180);

        switch(taskNum) {
            case 3:  // refill gas
                TaskSpace.drawTask3(ctx);
                break;
        }
    }


    initialDrawMap(ctx) {
        // INITIAL DRAWING LOGIC
        for (const taskSpace of this.env.taskSpaces)
            taskSpace.draw(ctx);

        for(const rect of this.env.rectangles)
            rect.draw(ctx);

        this.plyr.draw(ctx); 
    }

}

export default Game;