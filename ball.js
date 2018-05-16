class Ball {
	constructor(radius, xpos, ypos) {
		this.radius = radius;
		this.position = [xpos, ypos];
		this.speed = [5, 5];
	}

	render(context) {
		context.beginPath();
		context.arc(this.position[0], this.position[1], this.radius, 0, 4*Math.PI, false);
		context.fillStyle = 'white';
		context.fill();
	}

	move() {
		this.position[0] += this.speed[0];
		this.position[1] += this.speed[1];

		if(this.position[0] === 0 || this.position[0] === canvas.width) {
			this.speed[0] = -this.speed[0];
			this.position[0] += this.speed[0];
			this.position[1] += this.speed[1];
		}

		if(this.position[1] === 0 || this.position[1] === canvas.height) {
			this.speed[1] = -this.speed[1];
			this.position[0] += this.speed[0];
			this.position[1] += this.speed[1];
		}
	}

}