class Polygon
{
    constructor(x,y,r)
    {
        var boxFeatures = {
            isStatic: true,
            friction:2
          }
          this.body=Bodies.circle(x,y,r,boxFeatures);
          World.add(myWorld,this.body)
          this.r=r
          //this.image=loadImage("base.png")
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("pink")
    ellipseMode(CENTER)
    ellipse(0,0,this.r);
     pop()
    }
    }
