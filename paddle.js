class Paddle {
		constructor(width, height, xpos, ypos, up, down) {
			this.width = width;
			this.height = height;
			this.position = [xpos, ypos];
			this.paddleKeys = [up, down];
			this.speed = 5;
			this.key = 0;

			// 1. fn(){}.bind(this);
			// 2. Arrow fn
			document.addEventListener('keydown', (event) => {
				this.key = event.keyCode;
				switch (event.keyCode) {
				case this.paddleKeys[0]:
					this.moveUp();
					break;
				case this.paddleKeys[1]:
					this.moveDown();
					break;
				}
			});
		}

		render(context) {
			this.context = context;
			context.beginPath();
			context.rect(this.position[0], this.position[1], this.width, this.height);
			context.fillStyle = 'black';
			context.fill();
		}

		move() {
			if(this.key === this.paddleKeys[0])
				this.moveUp();
			else if(this.key === this.paddleKeys[1])
				this.moveDown();
		}

		moveUp() {
			this.position[1] -= this.speed;
			if(this.position[1] <= 5)
					this.position[1] = 5;
		}

		moveDown() {
			this.position[1] += this.speed;
			if(this.position[1] + this.height >= canvas.height - 5)
				this.position[1] = canvas.height - 5 - this.height;
		}

	}
