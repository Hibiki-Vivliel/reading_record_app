// script.js
fetch('Dummy-data.json')
  .then(response => response.json())
  .then(data => {
    const bookList = document.getElementById('bookList');
    data.forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');

      bookDiv.innerHTML = `
        <h2>📘 ${book.title}（${book.author}）</h2>
        <p>出版社: ${book.publisher} / 発行年: ${book.year} / ISBN: ${book.isbn}</p>
        <p>読了: ${book.startDate} ～ ${book.endDate}</p>
        <p><strong>メモ:</strong> ${book.reflection}</p>
        ${book.imageURL ? `<img src="${book.imageURL}" alt="${book.title}" width="150">` : ''}
        <hr />
      `;
      bookList.appendChild(bookDiv);
    });
  })
  .catch(error => {
    console.error('データの読み込みに失敗しました:', error);
  });
