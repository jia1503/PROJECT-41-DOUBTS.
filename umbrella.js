class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic : true
        }
        this.image = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png", "walking_5.png","walking_6.png","walking_7.png","walking_8.png");
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world,this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        animationMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}; 