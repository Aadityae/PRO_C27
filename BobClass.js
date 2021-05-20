class Bob {
    constructor(x, y) {

        this.x =x
        this.y = y
      var options = {
          'restitution':0.5,
          'friction':5,
          'density':1.0,
          
      }
      this.body = Bodies.circle(x, y, 26, options);
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(1)
      stroke("black")
      fill("magenta");
      ellipse(0, 0, 26);
      pop();
    }
  };