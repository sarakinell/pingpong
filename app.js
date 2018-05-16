/*
* Pingpong game
* Sara Kinell
* Version 5, May 2018
*/

var canvas = document.getElementById('canvas');
var board = canvas.getContext('2d');

class Game {
	constructor(canvas, context) {
		this.canvas = canvas;
		this.context = context;
		this.ball = new Ball(5, 20, 0);
		this.paddleleft = new Paddle(10, 100, 5, 5, 83, 88);
		this.paddleright = new Paddle(10, 100, this.canvas.width-5-10, this.canvas.height-5-100, 75, 77);
		this.score = [0, 0];
	}

	play() {
		setInterval(() => {
			this.resetCanvas();
			this.ball.move();
			this.ball.render(this.context);
			this.checkCollisions();
			this.paddleleft.move();
			this.paddleright.move();
			this.paddleleft.render(this.context);
			this.paddleright.render(this.context)
		}, 17);
	}

	resetCanvas() {
		this.context.fillStyle = '#234988';
		this.context.fillRect(0, 0, canvas.width, canvas.height);
		this.context.fillStyle = '#F2FCFF';
		this.context.fillRect(0, canvas.height/2-2.5, canvas.width, 2);
		this.context.fillRect(0, 0, canvas.width, 1);
		this.context.fillRect(0, 0, 1, canvas.height);
		this.context.fillRect(0, canvas.height-1, canvas.width, 1);
		this.context.fillRect(canvas.width-1, 0, 1, canvas.height);
		this.context.fillStyle = '#2E3C6D';
		this.context.fillRect(canvas.width/2-10, 0, 10, canvas.height);
		this.context.font = "16px Monaco";
		this.context.fillStyle = '#FEF96D';
		this.context.fillText(this.score[0] + " | " + this.score[1], 0.92*this.canvas.width, 30);
	}

	checkCollisions() {
		if(this.ball.position[0] >= this.canvas.width - 5 - this.ball.radius - this.paddleright.width) {
			if(this.ball.position[1] + this.ball.radius >= this.paddleright.position[1] && this.ball.position[1] - this.ball.radius <= this.paddleright.position[1] + this.paddleright.height) {
				this.ball.position[0] = this.canvas.width - 10 - this.paddleright.width - this.ball.radius;
				this.ball.speed[0] = -this.ball.speed[0];
			}
			else if(this.ball.position[0] === this.canvas.width-this.ball.radius) {
				this.ball.move();
				this.score[0] += 1;
				console.log("Position " + this.ball.position[0]);
			}
		}

		if(this.ball.position[0] <= 5 + this.ball.radius + this.paddleright.width) {
			if(this.ball.position[1] - this.ball.radius >= this.paddleleft.position[1] && this.ball.position[1] + this.ball.radius <= this.paddleleft.position[1] + this.paddleleft.height) {
				this.ball.position[0] = 10 + this.paddleleft.width + this.ball.radius;
				this.ball.speed[0] = -this.ball.speed[0];
			}
			else if(this.ball.position[0] === 0 + this.ball.radius) {
				this.ball.move();
				this.score[1] += 1;
				console.log("Position " + this.ball.position[0]);
			}
		}
	}
}


 	var game = new Game(canvas, board);
 	game.play();

