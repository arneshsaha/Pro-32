//create the class for red color box
class Particlered 
{
  //create the constructor function
  constructor(x, y, width, height) 
  {
    var options = 
    {
      //isStatic:true
      friction: 1.0,
      restitution: 0.8,
      //density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 255;
    World.add(world, this.body);
  }

  //create the display function
  display() 
  {
    //vanish the boxes and increase the score

    if (this.body.speed < 5) 
    {
      
      var pos = this.body.position;
      
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    } else 
    {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      
      
      
      pop();
      
      
      

    }

    if(this.Visiblity < 0 && this.Visiblity > -251){
      score++;
    }

  }

  

};