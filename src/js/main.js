function rating() {
  const ratingCounter = document.querySelector(".rating__stars");
  const stars = ratingCounter.querySelectorAll(".rating__star");
  const submit = document.querySelector(".rating__btn");
  const ratingView = document.querySelector(".main__container-rating-view");
  const summaryView = document.querySelector(".main__container-summary-view");

  ratingCounter.addEventListener("click", (e) => {
    const star = e.target.closest(".rating__star");
    if (!star) return;

    stars.forEach((star) => star.classList.remove("rating__star--active"));
    star.classList.add("rating__star--active");
  });

  submit.addEventListener("click", () => {
    const activeStar = ratingCounter.querySelector(".rating__star--active");
    if (!activeStar) return;

    ratingView.classList.add("main__container-rating-view-submitted");
    setTimeout(() => {
      ratingView.style.display = "none";
      summaryView.style.display = "block";
    }, 200);
    setTimeout(() => {
      summaryView.classList.add("main__container-summary-view-submitted");
    }, 250);

    const rating = activeStar.dataset.value;
    // alert(`You have rated this ${rating} stars`);
  });
}

rating();
