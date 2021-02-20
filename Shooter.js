//create the class for the shooter
class Shooter 
{
  //create the constructor function
    constructor(x,y,width,height) 
    {
      var options = 
      {
          //isStatic:true
          friction:1.0,
          restitution:0.8,
          //density:1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height; 
      World.add(world, this.body);
    }

    //create the display function
    display()
    {
      var pos =this.body.position;
      //pos.x = mouseX;
     // pos.y = mouseY;
      //ellipseMode(CENTER);
      fill("pink");
    rect(pos.x, pos.y, this.width,this.height);
    }
  };