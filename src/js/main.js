function rating() {
  const ratingCounter = document.querySelector(".rating__stars");
  const stars = ratingCounter.querySelectorAll(".rating__star");
  const submit = document.querySelector(".rating__btn");

  ratingCounter.addEventListener("click", (e) => {
    const star = e.target.closest(".rating__star");
    if (!star) return;

    stars.forEach((star) => star.classList.remove("rating__star--active"));
    star.classList.add("rating__star--active");
  });

  submit.addEventListener("click", () => {
    const activeStar = ratingCounter.querySelector(".rating__star--active");
    const rating = activeStar.dataset.value;
    alert(`You have rated this ${rating} stars`);
  });
}

rating();
