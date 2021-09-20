class Ball{

    constructor(x,y){
    
    let options={
    restitution:0.3,
    
    
    }
    
    
    this.body = Bodies.circle(x,y,20,options);
    World.add(world,this.body);
      
    
    }
    
    display(){
    
    let angle = this.body.angle
    let pos = this.body.position
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    ellipseMode(CENTER);
    ellipseMode(RADIUS)
    ellipse(0,0,20,20);
    pop();
    
    
    
    }  
    }