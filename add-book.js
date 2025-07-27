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

    // 💡 修正点: Content-Type ヘッダーを削除し、body の形式を変更します
    // URLSearchParams を使って x-www-form-urlencoded 形式で送信します
    const urlEncodedData = new URLSearchParams(book).toString();

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwQCsfD1hH1JtqY23Vt4NM2qL2naVlMEXxk8K2C5HPLBfqq37DuvGvPPU8H_okW_0mp/exec", {
        method: "POST",
        // headers: { "Content-Type": "application/json" }, // 💡 この行を削除します
        body: urlEncodedData // 💡 JSON.stringify(book) ではなく、URLSearchParams の文字列を送信します
      });

      // レスポンスの確認（GAS側でContentService.MimeType.JSONを返しているので、そのままJSONとしてパースできます）
      const result = await response.json();
      if (result.status === "ok") {
        alert("本がGoogleスプレッドシートに保存されました！");
        form.reset();
        window.location.href = "index.html";
      } else {
        throw new Error("GASからの応答に問題がありました: " + JSON.stringify(result));
      }

    } catch (error) {
      console.error("送信エラー:", error);
      alert("エラーが発生しました。もう一度試してください。");
    }
  });
});