// add-book.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const book = {
      title: form.elements["title"].value,
      author: form.elements["author"].value,
      publisher: form.elements["publisher"].value,
      isbn: form.elements["isbn"].value,
      imageURL: form.elements["cover"].value,  // name="cover" を imageURL にマッピング

      purchaseDate: form.elements["purchaseDate"].value,
      customID: form.elements["idNumber"].value,
      category: form.elements["category"].value,
      shelfInfo: form.elements["location"].value,
      startDate: form.elements["startDate"].value,
      endDate: form.elements["endDate"].value,
      summary: form.elements["summary"].value,
      reflection: form.elements["thoughts"].value
    };

    const storedBooks = JSON.parse(localStorage.getItem("books") || "[]");
    storedBooks.push(book);
    localStorage.setItem("books", JSON.stringify(storedBooks));

    alert("本が保存されました！");
    form.reset();
    window.location.href = "index.html";
  });
});
