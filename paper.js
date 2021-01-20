class Paper {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("sprites/paper.png")
	    World.add(world, this.body);
       
        
   }
   display(){

    imageMode(CENTER);
    image(this.image,this.body.position.x, this.body.position.y,this.width);
    
   }
}
