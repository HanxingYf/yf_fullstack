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

const jsDontKnow = new Book('11','23','33');
console.log(jsDontKnow.hasOwnProperty('display'));
console.log(jsDontKnow.__proto__ == Book.prototype);

// 找到原型对象
// Book.prototype.display = () =>{}
// Book.prototype.cell = () =>{}
// Book.prototype = {
//     display: () => {},
//     cell: () => {}
// }

console.log(jsDontKnow.constructor == Book);
// 火车头和车身
console.log(jsDontKnow.constructor == Book == Book.prototype.constructor);
// 基于原型的面向对象
// 封装 继承 多态
console.log(jsDontknow.__proto__ == Book.prototype);
console.log(jsDontknow.hasOwnProperty('title'));
console.log(jsDontknow.hasOwnProperty('display'));
console.log(jsDontknow.__proto__.__proto__.__proto__);
console.log(Book.prototype.isPrototypeOf(jsDontKnow));
console.log('display' in jsDontknow);
