// es6 手册

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return '(' + this.x + ',' + this.y + ')';
    }
}
console.log(typeof Point);