// script.js (またはデータを表示するHTMLに直接記述)

document.addEventListener("DOMContentLoaded", async () => {
  const bookListDiv = document.getElementById("bookList"); // データを表示する要素

  if (bookListDiv) { // データを表示する要素が存在する場合のみ実行
    try {
      // 💡 GASでデプロイしたGETリクエスト用のURLに置き換えてください
      const gasGetUrl = "https://script.google.com/macros/s/AKfycbzxf5_HnfX4rttKw1TcKopIemVtdB405tKckntIj7ZjfzgYGw3T238ib8DksJvWa9nu/exec"; // GASのGET用URL

      const response = await fetch(gasGetUrl, {
        method: "GET", // GETメソッドでリクエスト
        // 💡 修正点: mode: 'no-cors' を削除し、headers を復活させる
        headers: { "Content-Type": "application/json" } // Content-Type ヘッダーを付与
      });

      if (!response.ok) {
        // HTTPステータスコードが200番台以外の場合
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      // GASからのJSONレスポンスを解析
      const result = await response.json();

      if (result.status === "success" && result.data) {
        const books = result.data;
        bookListDiv.innerHTML = ""; // 既存の内容をクリア

        if (books.length === 0) {
          bookListDiv.innerHTML = "<p>まだ本が登録されていません。</p>";
        } else {
          // 取得したデータをHTMLに表示（既存のCSSが適用される）
          books.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.className = "book-card"; // 既存のCSSクラスを適用

            // ここで表示したい情報をbookCardに追加
            bookCard.innerHTML = `
              <h3>${book.title || 'タイトルなし'}</h3>
              <p>著者: ${book.author || '不明'}</p>
              <p>出版社: ${book.publisher || '不明'}</p>
              <p>レーベル: ${book.label || '不明'}</p>
              <p>ISBN: ${book.isbn || '不明'}</p>
              ${book.imageURL ? `<img src="${book.imageURL}" alt="${book.title}" class="book-cover">` : ''}
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
  }

  // POSTフォームの処理 (add-book.js に記述されている部分)
  // こちらも fetch の mode: 'no-cors' を削除し、headers を復活させてください。
  // GASの doPost も JSON レスポンスを返すように変更済みです。
});