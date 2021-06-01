class Bob{
    constructor(x,y){
        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : false
        }
          this.body = Bodies.circle(x,y,50,options);
          this.radius = 50
          World.add(world, this.body);
    }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(rgb(235, 59, 214));
        ellipseMode(RADIUS);
        ellipse(0,0,50,50);
        pop();
      }
} 