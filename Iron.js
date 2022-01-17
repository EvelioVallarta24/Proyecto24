class Iron{
	constructor(x,y,w,h)
	{
	var options = {
		density:30,
		friction:3, 
		restitution:0.8
	}
		this.x=x;
		this.y=y;
		this.w=w;
        this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;	
            var angle=this.body.angle;	
			push()
			translate(ironpos.x, ironpos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.w,this.h);
            pop()
	}

}