// script.js
document.addEventListener('DOMContentLoaded', () => {
  const bookList = document.getElementById('bookList');
  const books = JSON.parse(localStorage.getItem('bookList')) || [];

  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `
      <h2>📘 ${book.title}（${book.author}）</h2>
      <p>出版社: ${book.publisher} / ISBN: ${book.isbn}</p>
      <p>購入日: ${book.purchaseDate} / 分類: ${book.category}</p>
      <p><strong>あらすじ:</strong> ${book.summary}</p>
      <p><strong>感想:</strong> ${book.thoughts}</p>
      ${book.cover ? `<img src="${book.cover}" alt="${book.title}" width="150">` : ''}
      <hr />
    `;
    bookList.appendChild(bookDiv);
  });
});