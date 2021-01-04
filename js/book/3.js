class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

Object.assign(Point.prototype,{
    toString() {},
    toValue() {}
})

const o = new Point(1,2);
console.log(Object.getOwnPropertyNames(Point.prototype));