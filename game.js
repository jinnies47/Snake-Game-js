import{update as updateSnake,draw as drawSnake,snake_speed,
    getsnakeHead,snakeintersection}from './snake.js'

import{update as updateFood,draw as drawFood}from './food.js'

import{outsideGrid}from './grid.js'
let lastRenderTime=0;

let gameOver=false;

const gameboard=document.getElementById('game-board')

function main(currentTime){
    //Our game loop:a function that repeats itself
    if(gameOver)
    {
        if(confirm('GAME OVER Press OK to restart'))
        {
            window.location.reload()
        }
        return 
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender<1/snake_speed)return;
    lastRenderTime=currentTime;
    update()
    draw()

}
window.requestAnimationFrame(main)
function update(){
    //updates our snake and checks whether we lost or gained 
    updateSnake()
    updateFood()
    checkdeath()
}
function draw(){
    //draws the snake at the correct position each time
    gameboard.innerHTML=''
    drawSnake(gameboard)
    drawFood(gameboard)
}
function checkdeath()
{
    //checks if we lost in the game or not
    gameOver=outsideGrid(getsnakeHead()) || snakeintersection()
}
