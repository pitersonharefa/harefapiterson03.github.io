// select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter_buttons button");
// console.log(filterButtons);
const filterablecards = document.querySelectorAll(".filterable_cards .card");
console.log(filterablecards);
// define the filtercards function
const filtercards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterablecards.forEach((card) => {
    card.classList.add("hide");
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

//console.log(filterButtons, filterablecards);
// filterButtons.forEach(button => button.addEventListener("click, filtercards"));
filterButtons.forEach((button) =>
  button.addEventListener("click", filtercards)
);
