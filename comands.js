const player = {

    direction= "N",
    x = 0,
    y = 0,

}

function turnLeft(rover){
    switch(rover.direction){
        case "N":
            rover.direction = "W"
        break;
        case "w":
            rover.direction = "S" 
        break;
        case "S":
            rover.direction = "E"
        break;
        case 'E':
            rover.direction = 'N'
        break;        
        } 
    console.log(`turnLeft was called! ${rover.direction}`);
    }
      
  function turnRight(rover){
      switch(rover.direction){
            case "N":
                rover.direction = "E"
            break;
            case "E":
                rover.direction = "S"
            break;
            case "S":
                rover.direction = "W"
            break;
            case "W":
                rover.direction = "N"
            break;
      }
    console.log(`turnRight was called!${rover.direction}`);
  }
  
  function moveForward(rover){
        switch(rover.direction){
        case "N":
            rover.y ++
        break;
        case"E":
            rover.x ++
        break;
        case"S":
            rover.y --
        break;
        case"W":
            rover.x --
        break
        }
    console.log(`moveForward was called ${rover.x}${rover.y}`);
  }

  turnLeft(player);