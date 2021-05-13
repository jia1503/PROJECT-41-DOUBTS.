class Drop {
    constructor(x, y) {
        var options = {
            friction : 0.1
        }
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
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    update(){
        if(this.body.position.y >= 800){
            Matter.body.setPosition(random(0,300), random(0,300));
        }
    }

}; 