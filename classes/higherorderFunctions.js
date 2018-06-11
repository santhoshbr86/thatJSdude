class Point{
	constructor(x,y){
		this.x=x;
		this.y=y;
	}
	toString(){
		return `(${this.x}, ${this.y})`;
	}
}
//var n = new Point(10,20);
var n = new Point('ddasdasd','bbbbbbbb');
console.log(n.toString());
class ColorPoint extends Point{
	constructor(x,y,color){
		super(x,y);
		this.color=color;
	}
	toString(){
		console.log(super.toString()+' in '+this.color);
	}
}

var c = new ColorPoint(23,34,'Blue');
c.toString();
console.log(c instanceof Point);
console.log(c instanceof ColorPoint);
