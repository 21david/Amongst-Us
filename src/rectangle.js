class Rectangle {
    // spaceTaken: [startX, startY, endX, endY]
    constructor(spaceTaken) {
        this.spaceTaken = spaceTaken;
    }

    draw(ctx) {
        // console.log("rectangle draw");
        // console.log(this.spaceTaken);
        ctx.fillStyle = "#324479";  // dark cyan ish
        const [startX, startY, endX, endY] = [this.spaceTaken[0], this.spaceTaken[1], this.spaceTaken[2], this.spaceTaken[3]];
        const [w, h] = [endX - startX, endY - startY]
        ctx.fillRect(this.spaceTaken[0], this.spaceTaken[1], w, h);
    }

    print() {
        console.log("Im a rectangle");
    }
}



export default Rectangle;