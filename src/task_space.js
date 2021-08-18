import Button from "./button";

class TaskSpace {
    // coords: [startX, startY, endX, endY]
    constructor(coords, taskNum) { // store coords array as 4 separate vars?
        this.coords = coords;
        this.taskNum = taskNum;
    }

    draw(ctx) {
        ctx.fillStyle = "#2bff2f70";  // lime green ish, slightly transparent
        const [startX, startY, endX, endY] = [this.coords[0], this.coords[1], this.coords[2], this.coords[3]];
        const [w, h] = [endX - startX, endY - startY]
        ctx.fillRect(startX, startY, w, h);
    }

    // DRAWING FUNCTIONS FOR TASKS
    static makeExitBtn(ctx, topLeft) {
        const exitBtn = new Button([topLeft.x + 450, topLeft.y + 10, 38, 34]);
        exitBtn.draw(ctx);
        return exitBtn;
    }

    static exitBtnClicked(game, exitBtn) { 
        return game.mousePressed && game.isClickingOn2(...exitBtn.coords);
    }

    static drawTaskCompleteMsg(ctx, topLeft) {
        ctx.fillStyle = 'black';
        ctx.fillText('Great job!!', topLeft.x + 40, topLeft.y + 20);
    }

    static drawTask1(ctx, game, topLeft) {
        // debugger;
        let exitBtn = this.makeExitBtn(ctx, topLeft);

        // object for the cross hair 
        let crossHair = {
            // to do: make sure random pos isn't already in the center
            pos: this.getRandomPos(100, 150, 400, 200),  // inner gray rect coords
            radius: 30,
            color: '#FFFFFF',

            draw: function(ctx) {
                ctx.strokeStyle = this.color;
                ctx.lineWidth = 2;
                let [x, y] = [this.pos[0], this.pos[1]];

                // O
                ctx.beginPath();
                ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
                ctx.stroke();

                // o
                ctx.beginPath();
                ctx.arc(this.pos[0], this.pos[1], this.radius/4, 0, 2 * Math.PI);
                ctx.stroke();

                // +
                ctx.moveTo(x, y - 60);
                ctx.lineTo(x, y + 60);
                ctx.stroke();
                
                ctx.moveTo(x - 60, y);
                ctx.lineTo(x + 60, y);
                ctx.stroke();
            }
        }

        console.log("CH pos: " + crossHair.pos);

        function fillGrayRect(ctx) {  // inner gray rect
            ctx.fillStyle = 'gray';
            ctx.fillRect(50, 140, 500, 300);  // gray rect coords (x, y, w, h)

            // target
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(300, 260 - 60);  // should be center of gray rect
            ctx.lineTo(300, 260 + 60);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(300 - 60, 260);  // should be center of gray rect
            ctx.lineTo(300 + 60, 260);
            ctx.stroke();
        };

        // debugger;
        fillGrayRect(ctx);
        crossHair.draw(ctx);

        const task1Interval = global.setInterval(() => {
            // console.log("TASK 1 INTERVAL...");
            // debugger;
            if(game.mousePressed) {
                // CROSSHAIR MOVING LOGIC
                crossHair.pos = [game.curX, game.curY];

                if(!this.isOutOfRange(100, 200, 380, 180, ...crossHair.pos)) {
                    fillGrayRect(ctx);
                    crossHair.draw(ctx);
                }
            }
            else {
                // TASK COMPLETION LOGIC
                if(game.isClickingOn2(260, 230, 80, 60)) {  // coords for 'target'
                    console.log("DONE!!!");
                    TaskSpace.drawTaskCompleteMsg(ctx, topLeft);
                    game.taskCompletion[0] = true;
                    return;
                }
            }

            // exit button
            if(TaskSpace.exitBtnClicked(game, exitBtn)) {
                clearInterval(task1Interval);
                game.clearTaskIntervals();
                game.curTask = 0;
                game.drawMap(ctx);
                return;
            }

        }, 40);

        // for 'esc' and 'q' to be able to close out of a task
        game.taskIntervals.push(task1Interval);

    }

    static drawTask2(ctx, game, topLeft) {
        // to be implemented later
    }

    // refill gas task
    static drawTask3(ctx, game, topLeft) {
        let exitBtn = this.makeExitBtn(ctx, topLeft);
        
        let time = 0;
        let h = 0;
        
        // logic for pressing the button to fill the gas tank
        const task3Interval = global.setInterval(() => {
            console.log("SET INTERVAL");
            if(game.mousePressed && game.isClickingOn(450, 380, 530, 430)) {
                if(h >= 180) {  
                    // TASK COMPLETION LOGIC
                    TaskSpace.drawTaskCompleteMsg(ctx, topLeft);
                    game.taskCompletion[2] = true;
                    return;
                }
                else {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(160, 375, 300, -(h += 2));
                    console.log("drawing red");
                }
            }

            // exit button
            if(TaskSpace.exitBtnClicked(game, exitBtn)) {
                game.curTask = 0;
                game.drawMap(ctx);
                clearInterval(task3Interval);
                return;
            }
        }, 40);

        // for 'esc' and 'q' to be able to close out of a task
        game.taskIntervals.push(task3Interval);
        
        // button to fill gas
        // to do: change to actual button obj
        ctx.fillStyle = '#111';
        ctx.fillRect(450, 380, 80, 50);
    }

    // download files
    static drawTask4(ctx, game, topLeft) {
        let btn = new Button([topLeft.x + 200, topLeft.y + 300, 100, 50]);
        btn.draw(ctx);

        let exitBtn = this.makeExitBtn(ctx, topLeft);

        let downloading = false;
        let downloadBar = 0;

        const task4Interval = global.setInterval(() => {
            console.log("TASK 4 INTERVAL...");
            if(game.mousePressed && game.isClickingOn2(...btn.coords)) {
                console.log("NOW DOWNLOADING");
                downloading = true;
            }

            // exit button
            if(TaskSpace.exitBtnClicked(game, exitBtn)) {
                game.curTask = 0;
                game.drawMap(ctx);
                clearInterval(task4Interval);
                return;
            }

            if(downloading) {
                if(downloadBar >= 340) {  
                    // TASK COMPLETION LOGIC
                    TaskSpace.drawTaskCompleteMsg(ctx, topLeft);
                    game.taskCompletion[3] = true;
                    return;
                }

                downloadBar += 5;

                // draw rectangle for progress bar
                ctx.fillStyle = '#02ad02';
                ctx.fillRect(topLeft.x + 80, topLeft.y + 227, downloadBar, 20);
            }
        }, 80);

        
        // for 'esc' and 'q' to be able to close out of a task
        game.taskIntervals.push(task4Interval);
    }

    static taskWords(tN) {
        switch(tN) {
            case 1: 
                return "Fix the navigation!";

            case 2:
                return "Throw out the trash!";
            
            case 3: 
                return "Refill the gas tank!";

            case 4:
                return "Download the files!";
            
        }
    
        return "Error: no such task";
    }

    static getRandomPos(x, y, w, h) {
        let randX = (Math.random() * w) + x;
        let randY = (Math.random() * h) + y;
        
        return [randX, randY];
    }

    // (x1, y1, w, h) is the 'range', (x, y) is the current position
    static isOutOfRange(x1, y1, w, h, x, y) {
        return (x < x1 || x > (x1+w)) || (y < y1 || y > (y1+h));
    }
    
}

export default TaskSpace;