
class Button {
    constructor(coords) {
        this.coords = coords;
    }

    draw(ctx) {
        let [x, y, w, h] = [...this.coords];
        ctx.fillStyle = "#111";  // button color
        ctx.fillRect(x, y, w, h);
    }


}

export default Button;