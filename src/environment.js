import {SCR_W, SCR_H} from './consts.js';
import Rectangle from './rectangle';
import TaskSpace from './task_space';

class Environment {
    constructor() {
        this.rectangles = [];
        this.taskSpaces = [];

        this.addRectangles();
        this.addTaskSpaces();
    }

    shiftEnvironment(offsetX, offsetY) {
        /*
        Shift every element in the game by a certain amount,
        depending on where the screen's coordinate are (with 
        respect to (0,0)). Then, once shifted, drawing the screen
        should make it look like the background moved with respect to
        the current player's location (always the center of the screen).
        */

        // all rectangles will get shifted
        let curRectX, curRectY, curRectX2, curRectY2;
        for(let curRect of this.rectangles) {

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
        let curX, curY, curX2, curY2;
        for(let curTaskSpace of this.taskSpaces) {

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

    addRectangles() {
        // add rectangles
        
        let rect1 = new Rectangle([150, 400, 500, 450]);
        let rect2 = new Rectangle([450, 150, 500, 450]);
        let rect3 = new Rectangle([86, 160, 150, 450]);
        
        let rect4 = new Rectangle([400, 20, 900, 80]);
        
        let rect5 = new Rectangle([800, 800, 1100, 860]);
        let rect6 = new Rectangle([1040, 600, 1100, 860]);

        this.rectangles.push(rect1, rect2, rect3, rect4, rect5, rect6);
    }

    addTaskSpaces() {
        // add task spaces

        let center = [SCR_W/2-20,SCR_H/2-20,SCR_W/2+20,SCR_H/2+20];
        
        let task1 = new TaskSpace([400,350,460,410], 1);
        let task2 = new TaskSpace([340,300,380,340], 2);
        
        // refill gas task
        let task3 = new TaskSpace([SCR_W/2-80,SCR_H/2-80,SCR_W/2-25,SCR_H/2-25], 3);

        // download files task
        let task4 = new TaskSpace(center, 4);

        this.taskSpaces.push(task1, task2, task3, task4);
    }
    
}

export default Environment;