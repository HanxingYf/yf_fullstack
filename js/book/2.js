
class Bar{
    doStuff(){
        console.log('stuff');
    }
}

const b = new Bar();
b.doStuff();
console.log(b.constructor === Bar.prototype.constructor);