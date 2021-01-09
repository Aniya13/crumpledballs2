class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.5,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius= radius;
      
      
      World.add(world, this.body);
      this.image=loadImage("paper.png");
    }
    display(){
      push ();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("white");
     image(this.image, 0, 0, this.radius, this.radius);
      pop();

    }
  };
  