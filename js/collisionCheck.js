(function(){

	let Point = function(x, y){
		this.x = x;
		this.y = y;
	};

	//封装向量
	let Vec2 = (function(){

		let V2 = function(x, y){
			let isXP = x instanceof Point;
			let isYP = y instanceof Point;
			if(isXP){
				if(isYP){
					this.x = y.x - x.x;
					this.y = y.y - x.y;
				}else{
					this.x = x.x;
					this.y = x.y;
				}
			}else{
				this.x = x;
				this.y = y;
			}
		};
		let p = V2.prototype;
		p.cross = function(v){
			if(!(v instanceof V2)){
				console.err('参数错误')；
				return null;
			} 
			return this.x * v.y - v.x * this.y;
		}

		p.sub = function(v){
			if(!(v instanceof V2)){
				console.err('参数错误')；
				return null;
			} 
			return new V2(this.x - v.x, this.y - v.y);
		}

		p.add = function(v){
			if(!(v instanceof V2)){
				console.err('参数错误')；
				return null;
			} 
			return new V2(this.x + v.x, this.y + v.y);
		}

		return V2;
	})();


	//两线段是否相交
	let isLineCross = function(a,b,m,n){

	};

	return function(rect1, rect2){
		let a1 = new Point(rect1[0], rect1[1]),
			b1 = new Point(rect1[2], rect1[3]),
			c1 = new Point(rect1[4], rect1[5]),
			d1 = new Point(rect1[6], rect1[7]),
			a2 = new Point(rect2[0], rect2[1]),
			b2 = new Point(rect2[2], rect2[3]),
			c2 = new Point(rect2[4], rect2[5]),
			d2 = new Point(rect2[6], rect2[7]);

		//分别找出两矩形包围盒
		let x1_min = Math.min(a1.x, b1.x, c1.x, d1.x),
			x1_max = Math.max(a1.x, b1.x, c1.x, d1.x),
			y1_min = Math.min(a1.y, b1.y, c1.y, d1.y),
			y1_max = Math.max(a1.y, b1.y, c1.y, d1.y),

			x2_min = Math.min(a2.x, b2.x, c2.x, d2.x),
			x2_max = Math.max(a2.x, b2.x, c2.x, d2.x),
			y2_min = Math.min(a2.y, b2.y, c2.y, d2.y),
			y2_max = Math.max(a2.y, b2.y, c2.y, d2.y);

		let outBox1 = new Point((x1_min + x1_max) / 2, (y1_min + y1_max) / 2),
			outBox2 = new Point((x2_min + x2_max) / 2, (y2_min + y2_max) / 2),
			distance_x = (x1_max - x1_min) / 2 + (x2_max - x2_min) / 2,
			distance_y = (y1_max - y1_min) / 2 + (y2_max - y2_min) / 2;

		//记录外包围盒是否重叠
		let isOutBoxCross = Math.abs(outBox1.x - outBox2.x) <= distance_x && Math.abs(outBox1.y - outBox2.y) <= distance_y;
		if(!isOutBoxCross) return false;

		//判定是否为一个包围另一个的情况

	}



})()