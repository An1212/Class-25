class Boat{
    constructor(x,y,w,h,boatPos){

    this.body= Bodies.rectangle(x,y,w,h);
    this.width= w;
    this.height= h;
    this.boatPosition= boatPos;

    this.image= loadImage("assets/boat.png");
    
    World.add(world,this.body);
    }

    display(){
        var angle= this.body.angle;
        var pos= this.body.position;

        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,this.boatPosition,this.width,this.height);
        pop()
    }
}