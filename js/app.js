//select pages
const pages = document.querySelectorAll(".page");

Array.from(pages)
  .reverse()
  .forEach((page, index) => {
    // select next page button
    const nextPageButton = page.querySelector(".next-page-button");
    nextPageButton.addEventListener("click", () => {
      page.style.setProperty("--page-index", index);
      page.classList.add("flipped");
    });
  });
Array.from(pages).forEach((page, index) => {
  // select prev page button
  const prevPageButton = page.querySelector(".prev-page-button");
  prevPageButton.addEventListener("click", () => {
    page.style.setProperty("--page-index", index + 1);
    page.classList.remove("flipped");
  });
});
