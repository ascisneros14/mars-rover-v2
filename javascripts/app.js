// Rover Object Goes Here
// ======================

// ======================

var grid = new Array(10);
for(var i= 0; i<10; i++){
  grid[i] = new Array(10).fill("_");
}

var rover = {
  direction: "N",
  position: [0,0],
	x: 0,
	y: 0,
	travelLog: " "
};

var direction = rover.direction;
	var x = rover.x;
	var y = rover.y;
	var travelLog = rover.travelLog;

//Girar a la izquierda
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
	console.log("El Rover esta mirando a: " + rover.direction);
	console.log("La nueva posicion del Rover es: [" + rover.y + ", " + rover.x + "]");
}

//Girar a la derecha
function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
	console.log("El Rover esta mirando a: " + rover.direction);
	console.log("La nueva posicion del Rover es: [" + rover.y + ", " + rover.x + "]");
}

//Moverse adelante
function moveForward(rover){
	switch (rover.direction) {
		case "N":
			rover.y--;
			break;
		case "S":
			rover.y++;
			break;
		case "E":
			rover.x++;
			break;
		case "W":
			rover.x--;
			break;
	}

//Mantenerlo dentro de la cuadricula
	if (rover.y < 0) {
		rover.y += 10;
}

if (rover.y > 9) {
	rover.y -= 10;
}

if (rover.x < 0) {
	rover.x += 10;
}

if (rover.x > 9) {
	rover.x -= 10;
}
	console.log("El Rover esta mirando a: " + rover.direction);
  console.log("La nueva posicion del Rover es: [" + rover.y + ", " + rover.x + "]");
}

//Moverse atras
function moveBackwards(rover){
	switch (rover.direction) {
		case "N":
			rover.y++;
			break;
		case "S":
			rover.y--;
			break;
		case "E":
			rover.x++;
			break;
		case "W":
			rover.x--;
			break;
	}

//Mantenerlo dentro de la cuadricula
if (rover.y < 0) {
	rover.y += 10;
}

if (rover.y > 9) {
rover.y -= 10;
}

if (rover.x < 0) {
rover.x += 10;
}

if (rover.x > 9) {
rover.x -= 10;
}
	console.log("El Rover esta mirando a: " + rover.direction);
  console.log("La nueva posicion del Rover es: [" + rover.y + ", " + rover.x + "]");
}

//Pulsar teclas para mover el Rover
function commands(rover, orders){
	for(var i = 0; i < orders.length; i++){
    var key = orders[i];

		switch (key) {
		case "f":
			moveForward(rover);
			travelLog += key;
			break;
		case "b":
			moveBackwards(rover);
			travelLog += key;
			break;
		case "r":
			turnRight(rover);
			travelLog += key;
			break;
		case "l":
			turnLeft(rover);
			travelLog += key;
			break;
		default:
		console.log("Los comandos validos son (f, b, r, l) (f)orward, (b)ackward, (r)ight, or (l)eft.");
	}
console.log("Movimientos del Rover: " + travelLog);
}
}
//Movimientos de prueba
commands(rover, "rffflffrbbrflft");
