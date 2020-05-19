// Vanilla JavaScript application
// Object Oriented approach with ES6 Class Syntax
// Skeleton CSS CDN for quicker UI build
// TODO:: Add local storage and persist

console.log('Hello es6');

// Book Class
class Book {
  constructor(author, title, isbn) {
    this.author = author;
    this.title = title;
    this.isbn = isbn;
  }
}

// UI Class
class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');

    // Create a tr element
    const row = document.createElement('tr');
  
    // Append html into the tr element
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement('div');

    // Add classes
    div.className = `alert ${className}`;
    // Append the message into div
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.container');

    // Get form
    const form = document.getElementById('book-form');

    // Insert alert
    container.insertBefore(div, form);

    // Delete after a few seconds
    setTimeout(function() {
      document.querySelector('.alert').remove();
    }, 2000);

  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event listeners for adding a book
document.getElementById('book-form').addEventListener('submit', 
function(e) {

  // Get the form field values
  const title = document.getElementById('title').value;
        author = document.getElementById('author').value;
        isbn = document.getElementById('isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI 
  const ui = new UI();

  // Validate the form
  if (title === '' || author === '' || isbn === '') {
    // Error alert 
    ui.showAlert('Please fill in all fields in the form', 'error');
  } else {
    // Add a book to the list
    ui.addBookToList(book);

    // Show success alert
    ui.showAlert('Book added successfully!', 'success');

    // Clear fields
    ui.clearFields();
  };

  e.preventDefault();
});

// Event listeners for deleting a book
document.getElementById('book-list').addEventListener('click', 
function(e) {

  // Instantiate book
  const ui = new UI();

  // Delete book method
  ui.deleteBook(e.target);

  // Show delete success
  ui.showAlert('Book deleted successfully!', 'success');

  e.preventDefault();
});