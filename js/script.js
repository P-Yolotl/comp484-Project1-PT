// JavaScript for filtering books in the reading list
const searchBox = document.getElementById("book-search");
const books = document.querySelectorAll(".book-card");

searchBox.addEventListener("input", function () {
  const searchText = searchBox.value.toLowerCase();

  books.forEach(function (book) {
    const bookText = book.textContent.toLowerCase();

    if (bookText.includes(searchText)) {
      book.style.display = "";
    } else {
      book.style.display = "none";
    }
  });
});
