class DustBin {

    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        var options = {isStatic:true};
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        rect(0, 0, this.body.width, this.body.height);
        pop();
    }


}