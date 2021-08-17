import MovingObject from './moving_object';

class Player extends MovingObject {
    constructor(obj) {
        this.img = new Image();
        this.img.src = 'player.png';

        super(obj);
        this.dir = 'R';
    }

    // this is an overridden draw method. player will use this draw.
    draw(ctx) {
        // ctx.fillStyle = this.color;
        // ctx.beginPath();
        // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        // ctx.fill();

        ctx.drawImage(this.img, this.pos[0] - 28, this.pos[1] - 48);
    }

    isCollidedWith(otherObj) {
        // otherObj is the rectangle or task
        const arr = otherObj.coords; // make a super class for Rect and Task? ('generalizing')
        const [x1, y1, x2, y2] = [arr[0], arr[1], arr[2], arr[3]];

        const [x, y] = this.currentPos(); 

        return (x > x1 && x < x2) && (y > y1 && y < y2);
    }

    currentPos() {
        return [this.pos[0], this.pos[1]];
    }
    
}

export default Player;