// script.js
document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.getElementById("bookList");
  const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");

  storedBooks.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <h2>📘 ${book.title}（${book.author || "著者不明"}）</h2>
      <p>出版社: ${book.publisher || "不明"} / ISBN: ${book.isbn || "未入力"}</p>
      <p>購入日: ${book.purchaseDate || "なし"} / 分類: ${book.category || "なし"}</p>
      <p>配架情報: ${book.shelfInfo || "なし"} / ID: ${book.customID || "なし"}</p>
      <p>読書期間: ${book.startDate || "??"} ～ ${book.endDate || "??"}</p>
      <p><strong>あらすじ:</strong> ${book.summary || "なし"}</p>
      <p><strong>感想:</strong> ${book.reflection || "なし"}</p>
      ${book.imageURL ? `<img src="${book.imageURL}" alt="${book.title}" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.3); margin-top: 10px;">` : ''}
      <hr />
    `;
    bookList.appendChild(bookDiv);
  });
});
