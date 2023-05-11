const page = document.querySelector("div.page.page-1");
const nextPageButton = page.querySelector(".next-page-button");
const prevPageButton = page.querySelector(".prev-page-button");

nextPageButton.onclick = () => {
  page.classList.add("flipped");
};
prevPageButton.onclick = () => {
  page.classList.remove("flipped");
};
