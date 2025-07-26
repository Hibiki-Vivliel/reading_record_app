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
      // ✅ ここにステップ3でコピーしたWebアプリのURLを入れてね！
      const scriptURL = "<<<https://script.google.com/macros/s/AKfycbwbwnMy0_BS4mdGDJj8f6rJBlg1cF5BLpTFisEidWLNoyYUvKG2UlZTuzB15lFJRToL/exec>>>";

      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("📚 本がGoogleスプレッドシートに保存されました！");
        form.reset();
        window.location.href = "index.html";
      } else {
        alert("⚠️ 保存に失敗しました。");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ エラーが発生しました。");
    }
  });
});
