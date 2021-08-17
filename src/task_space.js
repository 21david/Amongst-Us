
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
    static drawTask1(ctx) {

    }

    static drawTask2(ctx) {

    }

    // refill gas task
    static drawTask3(ctx, game) {
        
        let time = 0;
        let h = 0;
        
        // logic for pressing the button to fill the gas tank
        const task3Interval = global.setInterval(() => {
            console.log("SET INTERVAL");
            if(game.mousePressed && game.isClickingOn(450, 380, 530, 430)) {
                if(h >= 180) {
                    game.taskCompletion[2] = true;
                    ctx.fillStyle = 'black';
                    ctx.fillText('Great job!!',180,100);
                    clearInterval(task3Interval);
                    return;
                }
                console.log("btn pressed");
                ctx.fillStyle = 'red';
                ctx.fillRect(160, 375, 300, -(h += 2));
                console.log("drawing red");
            }
        }, 40);
            
        
        // button to fill gas
        ctx.fillStyle = '#111';
        ctx.fillRect(450, 380, 80, 50);
    }

    // download files
    static drawTask4() {

        const task3Interval = global.setInterval(() => {
            if(game.mousePressed && game.isClickingOn(450, 380, 530, 430)) {

            }
        }, 40);
    }

    static taskWords(tN) {
        switch(tN) {
            case 1: 
                return "Fix the electrical system!";

            case 2:
                return "Throw out the trash!";
            
            case 3: 
                return "Refill the gas tank!";

            case 4:
                return "Download the files!"
            
        }
    
        return "Error: no such task";
    }
    
}

export default TaskSpace;