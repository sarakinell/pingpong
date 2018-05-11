/*
* Pingpong game
* Sara Kinell
* Version 1, May 2018
*/

console.log("Hello, from app.js!");

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Ball {
	constructor(radius, xpos, ypos) {
		this.radius = radius;
		this.position = [xpos, ypos];
	}

	render(context) {
		context.beginPath();
		context.arc(this.radius, this.radius, this.radius, 0, 4*Math.PI, false)
		context.fillStyle = '#fff';
		context.fill();
	}

	setVelocity(velocity) {
		this.position[0] += velocity;
		this.position[1] += velocity;
	}

	move() {
		ctx.fillStyle = 'black';
		setVelocity(1);
	}
}

	var ball = new Ball(5, 5, 5);
	ball.render(ctx);




