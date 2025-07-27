// script.js
document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.getElementById('bookList');

  // ✅ ここにあなたの Web アプリ URL を入れる（/exec まで）
  const SHEET_URL = "https://script.google.com/macros/s/AKfycbzaUGj7avogCrdjWHpPC3PH9GTOS2C8Y6GXAwgK-1kVUDfXQ81fUQPNL3tyg8nc_Sph/exec";

  fetch(SHEET_URL)
    .then(response => response.json())
    .then(data => {
      bookList.innerHTML = ""; // 初期化

      data.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
          <h2>📘 ${book.title}（${book.author}）</h2>
          <p>出版社: ${book.publisher} / ラベル: ${book.label} / ISBN: ${book.isbn}</p>
          <p>購入日: ${book.purchaseDate} / ID: ${book.customID} / 分類: ${book.category}</p>
          <p>配架情報: ${book.shelfInfo}</p>
          <p>読始日: ${book.startDate} ～ 読了日: ${book.endDate}</p>
          <p><strong>あらすじ:</strong> ${book.summary}</p>
          <p><strong>感想:</strong> ${book.reflection}</p>
          ${book.imageURL ? `<img src="${book.imageURL}" alt="${book.title}" width="150">` : ''}
          <hr />
        `;
        bookList.appendChild(bookDiv);
      });
    })
    .catch(error => {
      console.error("データ取得エラー:", error);
      bookList.innerHTML = "<p>データを取得できませんでした。</p>";
    });
});
