class TaskSpace {
    // coords: [startX, startY, endX, endY]
    constructor(coords) { // store coords array as 4 separate vars?
        this.coords = coords;
    }

    draw(ctx) {
        // console.log("rectangle draw");
        // console.log(this.coords);
        ctx.fillStyle = "#2bff2f70";  // lime green ish
        const [startX, startY, endX, endY] = [this.coords[0], this.coords[1], this.coords[2], this.coords[3]];
        const [w, h] = [endX - startX, endY - startY]
        ctx.fillRect(startX, startY, w, h);
    }
}

export default TaskSpace;