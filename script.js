// 例えば、データを表示したいHTMLファイル (例: index.html または view-books.html) に
// <div id="bookList"></div> のような要素を用意し、そこに表示する想定です。

document.addEventListener("DOMContentLoaded", async () => {
  const bookListDiv = document.getElementById("bookList"); // データを表示する要素

  try {
    // 💡 GASでデプロイしたGETリクエスト用のURLに置き換えてください
    const gasUrl = "https://script.google.com/macros/s/AKfycbyVgGEtrUMXs4uR5RRUeJuIzm_Onu5L5yJwVlQafLsD8NfOiINgjcAoqAnSob3qquzs/exec"; // このURLをGET用のものに置き換える

    const response = await fetch(gasUrl, {
      method: "GET", // GETメソッドでリクエスト
      headers: { "Content-Type": "application/json" } // 必要に応じてヘッダーを設定
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const result = await response.json();

    if (result.status === "success" && result.data) {
      const books = result.data;
      bookListDiv.innerHTML = ""; // 既存の内容をクリア

      if (books.length === 0) {
        bookListDiv.innerHTML = "<p>まだ本が登録されていません。</p>";
      } else {
        // 取得したデータをHTMLに表示
        books.forEach(book => {
          const bookCard = document.createElement("div");
          bookCard.className = "book-card"; // スタイルを適用するためのクラス名

          // ここで表示したい情報をbookCardに追加
          // 💡 スプレッドシートのヘッダー名と一致するプロパティ名でアクセスします
          bookCard.innerHTML = `
            <h3>${book.title || 'タイトルなし'}</h3>
            <p>著者: ${book.author || '不明'}</p>
            <p>出版社: ${book.publisher || '不明'}</p>
            <p>レーベル: ${book.label || '不明'}</p>
            <p>ISBN: ${book.isbn || '不明'}</p>
            ${book.imageURL ? `<img src="${book.imageURL}" alt="${book.title}" style="max-width: 100px; height: auto;">` : ''}
            <p>購入日: ${book.purchaseDate || '不明'}</p>
            <p>カスタムID: ${book.customID || '不明'}</p>
            <p>カテゴリ: ${book.category || '不明'}</p>
            <p>カテゴリID: ${book.categoryID || '不明'}</p>
            <p>棚情報: ${book.shelfInfo || '不明'}</p>
            <p>読書開始日: ${book.startDate || '未開始'}</p>
            <p>読了日: ${book.endDate || '未読'}</p>
            <p>概要: ${book.summary || 'なし'}</p>
            <p>感想: ${book.reflection || 'なし'}</p>
            <hr>
          `;
          bookListDiv.appendChild(bookCard);
        });
      }

    } else {
      bookListDiv.innerHTML = `<p>データの取得に失敗しました: ${result.message || '不明なエラー'}</p>`;
    }

  } catch (error) {
    console.error("データの取得エラー:", error);
    bookListDiv.innerHTML = `<p>データの読み込み中にエラーが発生しました。もう一度試してください。<br>詳細: ${error.message}</p>`;
  }
});