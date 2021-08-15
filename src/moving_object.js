class MovingObject {
    constructor(options_obj = {}) {
        this.pos = options_obj.pos || [0,0];
        this.vel = options_obj.vel || [1,1];
        this.radius = options_obj.radius || 5;
        this.color = options_obj.color || "#270aff"; // blue default color
    }

    move() {
        console.log(this.pos);
        console.log("Moving...");
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        console.log(this.pos);
    }

    // dir is something like [0, -1] or [1, 0]
    moveInDir(dir) {
        this.pos[0] += dir[0] * this.vel[0];
        this.pos[1] += dir[1] * this.vel[1];
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], 100, 100);
    }

}

module.exports = MovingObject;