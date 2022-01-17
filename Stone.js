class Stone{
	constructor(x,y,w,h)
	{
	var options = {
		density:12,
		friction:0.9, 
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
			var stonepos=this.body.position;	
            var angle=this.body.angle;	
			push()
			translate(stonepos.x, stonepos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			rect(0,0,this.w,this.h);
            pop()
	}

}