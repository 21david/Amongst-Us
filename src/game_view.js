
class GameView {
    constructor(game, ctx, player) {
        this.game = game;
        this.ctx = ctx;
        this.playerCircle = player;

        this.moves = {
            w: [0, -1],
            a: [-1, 0],
            s: [0, 1],
            d: [1, 0],
        };

        this.bindKeyHandlers();
    }

    bindKeyHandlers() {

        // const moves_obj = this.moves;

        // const moveUp = [0, -1];
        // Object.keys(this.moves).forEach(function(k) {
        //     // for each key in this.moves, we will run this code
        //     const dir = moves_obj[k]; // dir will be an array like [-1, 0]

        //     // key(k, function() { playerCircle.moveInDir(dir) })
        // })

    }
}



export default GameView;