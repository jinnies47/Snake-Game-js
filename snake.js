import { getInputDirection } from "./input.js";

export const snake_speed=10;
const snakebody=[
    {x:11,y:11}
    //where the snake will appear at the start
]
let newsegments=0;
export function update(){
    addsegments() 
const inputDirection=getInputDirection()
 for(let i=snakebody.length-2;i>=0;i--)
 {
     snakebody[i+1]={ ...snakebody[i] }
 }
 snakebody[0].x+=inputDirection.x;
 snakebody[0].y+=inputDirection.y;
}
export function draw(gameboard){
    //creating the snake element
    snakebody.forEach(segment =>{
        const snakeElement=document.createElement('div')
        snakeElement.style.gridRowStart=segment.y
        snakeElement.style.gridColumnStart=segment.x
        snakeElement.classList.add('snake')
        gameboard.appendChild(snakeElement)
    })
}

export function expandSnake(amount)
{
    newsegments+=amount
    //by how much should we increement the snake's body
}
export function onSnake(position,{ignoreHead=false}={}){
    return snakebody.some((segment,index)=>{
        if(ignoreHead && index===0)return false
        return equalPositions(segment,position)
    })
}
export function snakeintersection(){
    //we have to ignore the head of the snake while checking if the snake's body intersects with its body 
    // if it does you loose else you win
    return onSnake(snakebody[0],{ignoreHead:true})
}
export function getsnakeHead(){
    return snakebody[0]
    //returns the position of the snake's head
}
function equalPositions(pos1,pos2){
    //check if the food position co-ordinates equal to that of the snake's head
    return (pos1.x===pos2.x && pos1.y===pos2.y)
}

function addsegments(){
    for(let i=0;i<newsegments;i++){
    snakebody.push({ ...snakebody[snakebody.length-1]})
    }
    //increementing the snake's body by one everytime the snake's position equals to that of food
    //increement it by pushing another element in the array
    newsegments=0;
}