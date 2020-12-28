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
const attrs = [...Object.getOwnPropertyNames(jsDontKnow), ...Object.getOwnPropertyNames(Book.prototype)];
console.log(attrs);
// 作业 返回对象上可以调用的方法或属性 attrs