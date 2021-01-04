class Book{
    constructor(isbn, title, author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    display(){
        return `
            ISBN号:${this.isbn}
            Title:${this.title}
            Author:${this.author}
        `
    }
}

let jsDontKnow = new Book('11','22','33');
const attrs = [...Object.getOwnPropertyNames(Book.prototype)];
// console.log(attrs);
// 作业 返回对象上可以调用的方法或属性 attrs
Object.prototype.price = 123;  
// Object.defineProperty(jsDontKnow, 'like', {
// 	enumerable: false,
// 	value: 'reading'
// })
// Object.defineProperty(jsDontKnow, Symbol(), {
// 	value: 'symbol'
// })
// while(jsDontKnow !== null){
    // for(let i in jsDontKnow){
    //     // for in 可以获取对象自身及其原型链上的可枚举属性，不包括名为 Symbol 值的属性
    //     console.log(i);
    // }
// }
for(let i in jsDontKnow){
    // for in 可以获取对象自身及其原型链上的可枚举属性，不包括名为 Symbol 值的属性
    console.log(i);
}