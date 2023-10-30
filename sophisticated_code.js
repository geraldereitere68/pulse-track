/* sophisticated_code.js */

// This code is a complex implementation of a library management system.
// It includes multiple classes and methods to handle book borrowing, returning, and tracking history.

class Book {
  constructor(title, author, genre, totalPages) {
    this.title = title;
    this.author = author;
    this.genre= genre;
    this.totalPages = totalPages;
    this.available = true;
    this.borrowingHistory = [];
  }

  borrowBook(member) {
    if (this.available) {
      this.available = false;
      this.borrowingHistory.push({
        member: member,
        date: new Date(),
        action: 'Borrowed'
      });
      console.log(`${member} borrowed "${this.title}" by ${this.author}`);
    } else {
      console.log(`Sorry, "${this.title}" is currently unavailable for borrowing.`);
    }
  }

  returnBook(member) {
    if (!this.available) {
      this.available = true;
      this.borrowingHistory.push({
        member: member,
        date: new Date(),
        action: 'Returned'
      });
      console.log(`${member} returned "${this.title}" by ${this.author}`);
    } else {
      console.log(`${member}, you have not borrowed "${this.title}" yet.`);
    }
  }

  displayBorrowingHistory() {
    console.log(`Borrowing History for "${this.title}" by ${this.author}:`);
    this.borrowingHistory.forEach(history => {
      console.log(`- ${history.member} ${history.action} on ${history.date}`);
    });
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`"${book.title}" by ${book.author} has been added to the library.`);
  }

  findBookByTitle(title) {
    const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    return book || null;
  }

  findBookByAuthor(author) {
    const booksByAuthor = this.books.filter(book => book.author.toLowerCase() === author.toLowerCase());
    return booksByAuthor.length > 0 ? booksByAuthor : null;
  }
}

// Usage example

const library = new Library();

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction", 234);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction", 320);
const book3 = new Book("1984", "George Orwell", "Science Fiction", 328);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const availableBook = library.findBookByTitle("To Kill a Mockingbird");
if (availableBook) {
  availableBook.borrowBook("John");
  availableBook.borrowBook("Sarah"); // Attempting to borrow already borrowed book
}

const returnedBook = library.findBookByAuthor("J.D. Salinger");
if (returnedBook) {
  returnedBook[0].returnBook("John");
}

book1.displayBorrowingHistory(); // Displaying borrowing history of book1

// Add more books, implement more features, and continue working on this advanced library management system.