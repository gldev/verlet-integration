window.onload = function() {	

	let canvas = document.getElementById("renderer"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

	let gravity = 0.5,
	bounce = 0.9;
	let points = [],
	lines = [];

	points.push({
		x: 100,
		y: 100,
		oldx: 95,
		oldy: 95,
	},
	{
		x: 110,
		y: 110,
		oldx: 100,
		oldy: 100,
	});



	update();

	function update() {
		updatePoints();
		renderPoints();
		requestAnimationFrame(update);
	}

	function updatePoints() {
		for (var i = 0; i < points.length; i++){
			var point = points[i],
			dx = point.x - point.oldx,
			dy = point.y - point.oldy;

			point.oldx = point.x;
			point.oldy = point.y;

			point.x += dx;
			point.y += dy;
			point.y += gravity;

			if(point.x > width){
				point.x = width;
				point.oldx = point.x + dx * bounce;
			} else if (point.x < 0) {
				point.x = 0;
				point.oldx = point.x + dx * bounce;
			}
			if(point.y > height){
				point.y = height;
				point.oldy = point.y + dy * bounce;
			} else if (point.y < 0) {
				point.y = 0;
				point.oldy = point.y + dy * bounce;
			}

		}
	}

	function renderPoints() {
		context.clearRect(0, 0, width, height);
		for (var i = 0; i < points.length; i++){
			var point = points[i];
			context.beginPath()
			context.arc(point.x, point.y, 5, 0, Math.PI * 2);
			context.fill();
		}
	}

}