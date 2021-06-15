import{onSnake,expandSnake} from './snake.js'
import{randomGridPosition} from './grid.js'
let food=getRandomfoodPosition();//the function which decides at which place the food will pop up next
const Expansion_rate=1;//the rate at which the snake's body will expand itself
export function update(){
    if(onSnake(food))
    {
        expandSnake(Expansion_rate)
        food=getRandomfoodPosition()
    }
}
export function draw(gameboard){
    const foodElement=document.createElement('div')
    foodElement.style.gridRowStart=food.y
    foodElement.style.gridColumnStart=food.x
    foodElement.classList.add('food')
    gameboard.appendChild(foodElement)
}
function getRandomfoodPosition(){
    let newFoodPosition
    while(newFoodPosition==null || onSnake(newFoodPosition)){
    newFoodPosition=randomGridPosition()
}
    return newFoodPosition;
}
