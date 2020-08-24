class Paper{
    constructor(x,y){
        var options = {
         isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
        World.add(world, this.body);

    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("brown")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();    
    }
}



