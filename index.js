const submitBtn = document.querySelector(".submite");
const mainCard = document.querySelector(".card");
const tyCard = document.querySelector(".hidden");

const ratings = document.querySelectorAll(".btn");
const star = document.querySelector(".star");

submitBtn.addEventListener("click", () => {
  mainCard.classList.add("hidden");
  tyCard.classList.remove("hidden");
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    star.textContent = rating.textContent;
  });
});
