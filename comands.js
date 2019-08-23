const player = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [],
};

function turnLeft(rover){
    switch(rover.direction){
        case "N":
            rover.direction = "W";
        break;
        case "w":
            rover.direction = "S";
        break;
        case "S":
            rover.direction = "E";
        break;
        case 'E':
            rover.direction = 'N';
        break;        
        } 
    console.log(`turnLeft was called! ${rover.direction}`);
}
      
function turnRight(rover){
    switch(rover.direction){
            case "N":
                rover.direction = "E";
            break;
            case "E":
                rover.direction = "S";
            break;
            case "S":
                rover.direction = "W";
            break;
            case "W":
                rover.direction = "N";
            break;
      }
    console.log(`turnRight was called! ${rover.direction}`);
  }
  
  function moveForward(rover){
        switch(rover.direction){
        case "N":
            if(rover.y == 9){
                  console.log("Rove left the map");
            }else {
                rover.y +=1;
            }
            
        break;

        case"E":
            if(rover.x == 9){
                console.log("Rove left the map");
            }else {
                rover.x +=1;
            }
        break;

        case"S":
            if(rover.y == 0){
                console.log("Rove left the map");
            }else {
                rover.y -= 1;
            }
        break;

        case"W":
            if(rover.x == 0){
                console.log("Rove left the map");
            }else {
                rover.x -=1;
            }
        break;
        }

        player.travelLog.push({x:rover.x, y:rover.y})
        console.log(player.travelLog);
        console.log(`moveBackward was called position X: ${rover.x} position Y: ${rover.y}`);
  }

 function moveBackward(rover){
    switch(rover.direction){
        case "N":
            if(rover.y == 0){
                  console.log("Rove left the map");
            }else {
                rover.y -=1;
            }
            
        break;

        case"E":
            if(rover.x == 0){
                console.log("Rove left the map");
            }else {
                rover.x -=1;
            }
        break;

        case"S":
            if(rover.y == 9){
                console.log("Rove left the map");
            }else {
                rover.y += 1;
            }
        break;

        case"W":
            if(rover.x == 9){
                console.log("Rove left the map");
            }else {
                rover.x += 1;
            }
        break;
        }

        player.travelLog.push({x:rover.x, y:rover.y})
        console.log(player.travelLog);
        console.log(`moveForward was called position X: ${rover.x} position Y: ${rover.y}`);    
 }
  let input= ['r','f','f','r','f','f','l','f','r','f','f','b'];

  function commands(input){
      for(let i = 0; i < input.length ; i += 1){
          switch(input[i]){
            case "r":
                turnRight(player);
            break;
            case "f":
                moveForward(player);
            break;
            case"l":
                turnLeft(player);
            break;
            case"b":
                moveBackward(player);
            break;
            default:

            break;

          }
      }
  }

  commands(input);