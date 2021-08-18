import {SCR_W, SCR_H, MAP_X, MAP_Y} from './consts.js';
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
        const rectangles = [
            new Rectangle([1033, 205, 1705, 501]),  // -246, 225, 144, 341
            new Rectangle([1033, 587, 1423, 698]),
            new Rectangle([1540, 586, 1705, 693]),
            new Rectangle([1653, 693, 1705, 909]),
            new Rectangle([1033, 699, 1316, 843]),
            new Rectangle([1256, 842, 1313, 1210]),
            new Rectangle([926, 750, 1044, 999]),
            new Rectangle([924, 1102, 1044, 1369]),
            new Rectangle([1032, 1204, 1382, 1497]),

            // cafeteria
            new Rectangle([1783, 76, 2454, 143]),
            new Rectangle([2602, 195, 2815, 494]),
            new Rectangle([2595,592, 2890, 844]),
            new Rectangle([2207, 977, 2521, 1144]),
            new Rectangle([1795, 975, 2080, 1337]),

            // weapons area
            new Rectangle([2814, 196, 3020, 334]),
            new Rectangle([3035, 481, 3173, 560]),
            new Rectangle([3015, 558, 3214, 843]),

            // navigation
            new Rectangle([3214, 738, 3433, 944]),
            new Rectangle([3433, 770, 3660, 842]),
            new Rectangle([3718, 871, 3777, 1117]),
            new Rectangle([3206, 1052, 3432, 1351]),
            
            // O2
            new Rectangle([2820, 944, 3080, 1088]),
            new Rectangle([2521, 1026, 2887, 1138]),
            new Rectangle([]),

            // admin
            new Rectangle([2755, 1138, 2888, 1500]),
            new Rectangle([2355, 1438, 2852, 1546]),
            new Rectangle([2280, 1331, 2354, 1546]),
            new Rectangle([2209, 1238, 2354, 1331]),
            
            // shields
            new Rectangle([3019, 1189, 3208, 1438]),
            new Rectangle([3124, 1438, 3206, 1473]),
            new Rectangle([3018, 1417, 3204, 1548]),
            new Rectangle([3042, 5153, 3203, 1663]),
            new Rectangle([3017, 1665, 3203, 1813]),
            // new Rectangle([2780, ]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),
            new Rectangle([]),

            // new Rectangle([]),
        ];

        let newCoords;
        for (let rect of rectangles) {
            newCoords = [rect.coords[0] + MAP_X, 
                        rect.coords[1] + MAP_Y, 
                        rect.coords[2] + MAP_X, 
                        rect.coords[3] + MAP_Y];
            
            rect.coords = newCoords;

            this.rectangles.push(rect);
        }
    }

    addTaskSpaces() {
        // add task spaces


        this.taskSpaces.push();
    }
    
}

export default Environment;