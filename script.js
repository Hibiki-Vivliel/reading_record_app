// script.js
async function loadBooks() {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxjGKr1X4MFhNa934D7bO7q2fFxYpCR-EddZBh4TF1Dx8jlPIaO5iglSKPiUMkMsge7/exec");
    const data = await response.json();

    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // 一旦リセット

    data.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      bookDiv.innerHTML = `
        <h2>📘 ${book.title}（${book.author}）</h2>
        <p>出版社: ${book.publisher} / ISBN: ${book.isbn}</p>
        <p>読了: ${book.startDate || ''} ～ ${book.endDate || ''}</p>
        ${book.imageURL ? `<img src="${book.imageURL}" alt="${book.title}" width="150">` : ''}
        <hr />
      `;
      bookList.appendChild(bookDiv);
    });

  } catch (error) {
    console.error("データ取得エラー:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadBooks);
