const page = document.querySelector("div.page.page-1");
const nextPageButton = page.querySelector(".next-page-button");

nextPageButton.onclick = () => {
  page.classList.add("flipped");
};
