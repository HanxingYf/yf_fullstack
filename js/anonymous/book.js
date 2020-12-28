function Book(isbn,title,author){
    this.isbn=isbn;
    this.title=title;
    this.author=author;
}

let theHabbit = new Book("0-39-01515","the habbit","J.rr");
console.log(theHabbit.author);

