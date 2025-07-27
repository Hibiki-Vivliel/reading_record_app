// add-book.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const book = {
      title: form.elements["title"].value,
      author: form.elements["author"].value,
      publisher: form.elements["publisher"].value,
      label: form.elements["label"].value,
      isbn: form.elements["isbn"].value,
      imageURL: form.elements["cover"].value,

      purchaseDate: form.elements["purchaseDate"].value,
      customID: form.elements["idNumber"].value,
      category: form.elements["category"].value,
      categoryID: form.elements["categoryID"].value,
      shelfInfo: form.elements["location"].value,
      startDate: form.elements["startDate"].value,
      endDate: form.elements["endDate"].value,
      summary: form.elements["summary"].value,
      reflection: form.elements["thoughts"].value
    };

    const urlEncodedData = new URLSearchParams(book).toString();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby3Ik5GhZvFCQ-wNzuh5nIBX_jTpzp9h29GNsiZzRTT_1IMJBzWvElx2fBBoxZzIsL9/exec", {
        method: "POST",
        // 💡 修正点: mode: 'no-cors' を再度有効にします
        // ヘッダーは引き続き不要です (URLSearchParams を使っているため)
        mode: "no-cors", 
        body: urlEncodedData
      });

      // 💡 修正点: no-cors モードではレスポンス内容を読み取れないため、
      // ここで response.json() などの処理は行いません。
      // GAS側でリダイレクトを処理するため、ここでは単に成功メッセージを表示し、フォームをリセットします。
      // 実際のリダイレクトはGAS側で行われます。
      alert("本を保存しようとしています..."); // 保存確認はGASのリダイレクト後になる
      form.reset();
      // window.location.href = "index.html"; // ここでのリダイレクトは不要、GASが処理する

    } catch (error) {
      console.error("送信エラー:", error);
      alert("エラーが発生しました。もう一度試してください。");
    }
  });
});