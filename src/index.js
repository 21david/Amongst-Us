/*  credit to Stark_0010001 for the map image
    https://www.reddit.com/r/AmongUs/comments/jbf24d/i_made_a_completely_clean_skeld_map_some_really/

    credit to Innersloth for all Among Us assets
    https://innersloth.com/gameAmongUs.php
    https://twitter.com/InnerslothDevs
    */
import MovingStars from './moving_stars.js';
window.MovingStars = MovingStars;
   
import GameView from './game_view';
window.GameView = GameView;

import Game from './game';
window.Game = Game;

import Environment from './environment';
window.Environment = Environment;

import MovingObject from './moving_object';
window.MovingObject = MovingObject;

import Player from './player';
window.Player = Player;

import Rectangle from './rectangle';
window.Rectangle = Rectangle;

import TaskSpace from './task_space';
window.TaskSpace = TaskSpace;

import {SCR_W, SCR_H} from './consts.js';

let bgCanvas, canvas;
let bgCtx, ctx;

// INITIAL LOGIC, CODE STARTS HERE
document.addEventListener('DOMContentLoaded', () => {

    // set up scrolling stars background
    
    bgCanvas = document.getElementById("bg-canvas");
    bgCtx = bgCanvas.getContext("2d");
    bgCanvas.width = window.innerWidth;
    bgCanvas.height = window.innerHeight;
    new MovingStars(bgCanvas, bgCtx);


    // set up canvas and context
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    canvas.width = SCR_W;
    canvas.height = SCR_H;

    new Game(canvas, ctx);

});