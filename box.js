class Box
{
    constructor(x,y,w,h)
{
    var boxFeatures = {
        restitution: 1,
        friction:2
      }
      this.body=Bodies.rectangle(x,y,w,h,boxFeatures);
      World.add(myWorld,this.body)
      this.w=w
      this.h=h
      //this.image=loadImage("base.png")
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
fill("red")
rectMode(CENTER)
rect(0,0,this.w,this.h);
pop()
}
}