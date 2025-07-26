// add-book.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const book = {
      title: form.elements["title"].value,
      author: form.elements["author"].value,
      publisher: form.elements["publisher"].value,
      label: form.elements["label"]?.value || "",   // 新しい「label」対応
      isbn: form.elements["isbn"].value,
      imageURL: form.elements["cover"].value,

      purchaseDate: form.elements["purchaseDate"].value,
      customID: form.elements["idNumber"].value,
      category: form.elements["category"].value,
      categoryID: form.elements["categoryID"]?.value || "",  // 新しい「categoryID」対応
      shelfInfo: form.elements["location"].value,
      startDate: form.elements["startDate"].value,
      endDate: form.elements["endDate"].value,
      summary: form.elements["summary"].value,
      reflection: form.elements["thoughts"].value
    };

  try {
      const response = await fetch("★ここにGASのWebアプリURLを入れる★", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book)
      });

      alert("本がGoogleスプレッドシートに保存されました！");
      form.reset();
      window.location.href = "index.html";
    } catch (error) {
      console.error("送信エラー:", error);
      alert("エラーが発生しました。もう一度試してください。");
    }
  });
});