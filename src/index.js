import GameView from './game_view';
window.GameView = GameView;

import Game from './game';
window.Game = Game;
window.GameView = GameView;

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

let canvas;
let ctx;

// INITIAL LOGIC, CODE STARTS HERE
document.addEventListener('DOMContentLoaded', () => {
    console.log("its up and running");

    // set up canvas and context
    canvas = document.getElementById("game-canvas");
    ctx = canvas.getContext("2d");
    canvas.width = SCR_W;
    canvas.height = SCR_H;

    // credit to Stark_0010001 for the map image
    // https://www.reddit.com/r/AmongUs/comments/jbf24d/i_made_a_completely_clean_skeld_map_some_really/
    
    const game = new Game(ctx);
    new GameView(game, ctx);

    console.log("W " + window.screen.width);
    console.log("H " + window.screen.height);

    console.log("W " + window.outerWidth);
    console.log("H " + window.outerHeight);


});