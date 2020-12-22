class Sling
{
    constructor(body1,point1){

       this.pointB = point1;
        var options=
        {
            bodyA:body1,
            pointB:point1,
            stiffness:0.05,
            length :50
        }
        this.polygon=Constraint.create(options)
        World.add(world,this.polygon)

    }
    fly(){
      this.polygon.bodyA = null;
  }
    display()
    {
        var pos = this.polygon.bodyA.position;
        stroke("white")
        line(pos.x,pos.y,this.pointB.x,this.pointB.y)
    }
} 