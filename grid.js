const GRID_SIZE=21;
export function randomGridPosition(){
    return {
        //generates random coordinates for food within the grid
        x:Math.floor(Math.random()*GRID_SIZE)+1,
        y:Math.floor(Math.random()*GRID_SIZE)+1
    }
}
export function outsideGrid(position){
    //function to check if snake reaches outside or not
    return (
        position.x<1 || position.x>GRID_SIZE || position.y<1 || position.y>GRID_SIZE
    )
}