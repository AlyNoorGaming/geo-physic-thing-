class Sqwer{
	constructor(x,y,r)
	{
	var options = {
			'density':1,
			'friction': 0.5,
			'restitution':0.5
		  };
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.rectangle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.r, this.r);
			pop()
	}

}