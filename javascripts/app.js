// Rover Object Goes Here
// ======================
var rover = {
  direction : "N",
  x : 4,
  y : 4,
  travelLog : []
}
// ======================
function turnLeft(rover){
  switch (rover.direction){
    case "N":
     rover.direction = "E";
     console.log("E");
      break;
    case "E":
     rover.direction = "S";
     console.log("S");
      break;
    case "S":
     rover.direction = "W";
     console.log("W");
       break;
    case "W":
     rover.direction = "N";
     console.log("N");
       break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction = "W";
      console.log("W");
       break;
    case "W":
      rover.direction = "S";
      console.log("S");
       break;
    case "S":
      rover.direction = "E";
      console.log("E");
       break;
    case "E":
      rover.direction = "N";
      console.log("N");
       break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  switch (rover.direction){
    case "N":
        if (rover.y > 0) {
      rover.y--;
      console.log(rover.x + "," + rover.y);
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
      }
       break;
    case "E":
        if (rover.x < 10) {
      rover.x++;
      console.log(rover.x + "," + rover.y)
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
        }
       break;
    case "S":
        if (rover.y < 10) {
      rover.y++;
      console.log(rover.x + "," + rover.y)
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
      }
       break;
    case "W":
        if (rover.x > 0) {
      rover.x--;
      console.log(rover.x + "," + rover.y)
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
      }
       break;
  }
  console.log("moveForward was called!")
}

function moveBackward(rover){
  switch (rover.direction){
    case "N":
        if (rover.y < 10) {
      rover.y++;
      console.log(rover.x + "," + rover.y);
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
      }
       break;
    case "E":
        if (rover.x > 0) {
      rover.x--;
      console.log(rover.x + "," + rover.y)
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
        }
       break;
    case "S":
        if (rover.y > 0) {
      rover.y--;
      console.log(rover.x + "," + rover.y)
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
      }
       break;
    case "W":
        if (rover.x < 10) {
      rover.x++;
      console.log(rover.x + "," + rover.y)
      rover.travelLog.push(rover.x + "," + rover.y);
        }
      else{
        console.log (rover.x + "," + rover.y + ", you are out");
      }
       break;
  }
  console.log("moveForward was called!")
}

function commands(rover, rute){
  for (let i = 0; i < rute.length; i++){
    switch (rute[i]){
      case "b":
        moveBackward(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
    }
  }
  console.log(rover.travelLog);
}
