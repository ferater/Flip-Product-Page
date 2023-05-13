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

let a = 0;
let b = 64;
const incraseFontSize = () => {
  console.log("inc");
  b += 1;
  if (b >= 99) b = 64;
  document.documentElement.style.fontSize = a + "." + b + "vw";
};
const decraseFontSize = () => {
  console.log("dec");
  b -= 1;
  if (b <= 40) b = 64;
  document.documentElement.style.fontSize = a + "." + b + "vw";
};
