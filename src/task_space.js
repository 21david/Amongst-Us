
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
    static drawTask3(ctx) {

        
        // ctx.fillStyle = 'red';
        // ctx.fillRect(160, 375, 300, -20);

        function drawRed(ctx, h) {
            
        }

        for(let h = 0, timeInterval = 0; h < 180; h++, timeInterval += 0.125) {
            global.setTimeout(() => {
                ctx.fillStyle = 'red';
                ctx.fillRect(160, 375, 300, -(1 *h));
                console.log("drawing red");
            }, timeInterval * 100);
        }


    }


    static taskWords(tN) {
        switch(tN) {
            case 1: 
                return "Fix the electrical system!";

            case 2:
                return "Throw out the trash!";
            
            case 3: 
                return "Refill the gas tank!";
            
        }
    
        return "Error: no such task";
    }
    
}

export default TaskSpace;