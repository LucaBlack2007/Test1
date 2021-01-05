class BaseClass {
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //this.image = loadImage("base.png");
        World.add(world, this.body);
      }

      getObject() {
          return this.x + ", " + this.y;
      }

      display() {
        //push();
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height);
        //translate(this.body.position.x, this.body.position.y);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        //pop();
      }
}