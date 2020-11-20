class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      World.add(world, this.body);
      
     // this.image1=loadImage("box4.png");
      this.visible = 255;
     

    }
    display(){
     // console.log(this.body.speed);
     
      if(this.body.speed<5){
        var angle = this.body.angle;
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        push();
        this.visible = this.visible - 5 ;
        tint(255,this.visible);
        
        //image(this.image1, this.body.position.x   , this.body.position.y, 30, 30);
        pop();
        World.remove(world,this.body);
      }
    }

    score(){
      if(this.visible<0 && this.visible>-105){
        score++;
      }
    }

  };
  