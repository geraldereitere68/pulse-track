/* Filename: ComplexJavaScriptCode.js
   Content: Example of a complex JavaScript code

   This code represents a virtual library management system. It includes functions for adding, removing, and searching books, as well as keeping track of loaned and returned books. It also offers the ability to display statistics and generate reports.

   Please note that this code is fictional and does not interact with any real database or user interface. It's meant to demonstrate a complex and elaborate JavaScript implementation.

   Feel free to use this code as a reference or modify it to suit your needs.
*/

// Book class representing a book in the library
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isLoaned = false;
  }

  loanBook() {
    this.isLoaned = true;
  }

  returnBook() {
    this.isLoaned = false;
  }
}

// Library class representing the overall library system
class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author, year) {
    const newBook = new Book(title, author, year);
    this.books.push(newBook);
  }

  removeBook(title) {
    this.books = this.books.filter(book => book.title !== title);
  }

  searchBook(title) {
    return this.books.find(book => book.title === title);
  }

  showLoanedBooks() {
    const loanedBooks = this.books.filter(book => book.isLoaned);
    console.log("Loaned Books:");
    loanedBooks.forEach(book => {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log("-------------");
    });
  }

  showAvailableBooks() {
    const availableBooks = this.books.filter(book => !book.isLoaned);
    console.log("Available Books:");
    availableBooks.forEach(book => {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log("-------------");
    });
  }

  showStatistics() {
    console.log(`Total Books: ${this.books.length}`);

    const loanedBooks = this.books.filter(book => book.isLoaned);
    console.log(`Loaned Books: ${loanedBooks.length}`);

    const availableBooks = this.books.filter(book => !book.isLoaned);
    console.log(`Available Books: ${availableBooks.length}`);
  }

  generateBookReport() {
    console.log("Book Report:");
    this.books.forEach(book => {
      console.log(`Title: ${book.title}`);
      console.log(`Author: ${book.author}`);
      console.log(`Year: ${book.year}`);
      console.log(`Loaned: ${book.isLoaned ? 'Yes' : 'No'}`);
      console.log("-------------");
    });
  }
}

// Example usage of the library system
const library = new Library();

library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
library.addBook("To Kill a Mockingbird", "Harper Lee", 1960);
library.addBook("1984", "George Orwell", 1949);
library.addBook("Pride and Prejudice", "Jane Austen", 1813);

library.showAvailableBooks();
console.log("------------------");
library.showLoanedBooks();
console.log("------------------");
library.removeBook("1984");
library.showAvailableBooks();
console.log("------------------");
const foundBook = library.searchBook("The Great Gatsby");
foundBook.loanBook();
library.showLoanedBooks();
console.log("------------------");
library.showStatistics();
console.log("------------------");
library.generateBookReport();
