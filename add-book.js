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
      imageURL: form.elements["imageURL"].value,  // name="cover" を imageURL にマッピング

      purchaseDate: form.elements["purchaseDate"].value,
      customID: form.elements["idNumber"].value,
      category: form.elements["category"].value,
      categoryID: form.elements["categoryID"].value,
      shelfInfo: form.elements["shelfInfo].value,
      startDate: form.elements["startDate"].value,
      endDate: form.elements["endDate"].value,
      summary: form.elements["summary"].value,
      reflection: form.elements["reflection"].value
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycby2TtQSIfus7BoLQJUQP49zyWta8O3WdyBjjNlR5yK685pZD2kA4cenqU8jHvvRlmIz/exec", {
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
