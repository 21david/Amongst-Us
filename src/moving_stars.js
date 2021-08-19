
class MovingStars {
    constructor(canv, ctx) {
        this.canv = canv;
        this.ctx = ctx;

        this.scrW = window.innerWidth;


        this.loop();
    }

    loop() {

        let star1 = new Star([this.scrW, 5], 4);
        let star2 = new Star([this.scrW + 200, 30], 5);

        const stars = 

        const stars = global.setInterval(() => {
            this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear the screen

            star1.draw(this.ctx);
            star1.pos[0] -= 5;

            
            star2.draw(this.ctx);
            star2.pos[0] -= 3;
        }, 20);
    }


}

class Star {
    constructor(startPos, radius) {
        this.pos = startPos;
        this.radius = radius;
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

export default MovingStars;