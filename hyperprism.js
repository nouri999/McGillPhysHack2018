class HyperPrism {
	constructor(lengths, orientation) {
		this.lengths = lengths;
		this.n = lengths.length;
		this.orientation = orientation;
		this.points = this.generatePoints(lengths, this.n - 1); 
	}

	generatePoints(lengths, i) {
		if (i == 0) return [[-lengths[0]/2], [lengths[0]/2]];
		let w = lengths[i];
		let points1 = this.generatePoints(lengths, i - 1);
		let points2 = this.generatePoints(lengths, i - 1);
		for (let i = 0; i < points1.length; i++) {
			points1[i].push(w/2);
			points2[i].push(-w/2);
		}
		return points1.concat(points2);
	}


	update(rotationMatrix, dt) {
		//rotate orientation
	}

	differByOne(p1, p2){
		let count = 0;
		for (let i = 0; i < p1.length; i++){
			if (p1[i] != p2[i]) {
				count++;
			}
		}
		return count == 1;
	}

	render() {
		translate(width/2, height/2);

		for (let i = 0; i < this.points.length; i++) {
			let x = this.points[i][0];
			let y = this.points[i][1];
			ellipse(x, y, 4); 
 		}

		for (let i = 0; i < this.points.length; i++) {
			for (let j = 0; j < this.points.length; j++) {
				if(this.differByOne(this.points[i], this.points[j])) {
					line(this.points[i][0], this.points[i][1],
						this.points[j][0], this.points[j][1]);
				}
			}
		}
	}
}