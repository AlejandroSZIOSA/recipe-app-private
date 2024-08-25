const mainEl = document.querySelector("main aside");
const formEl = document.querySelector("main aside form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the default form submission
  var title = document.getElementById("title").value;
  var time = document.getElementById("time").value;
  const submitObj = {
    title: event.target.title.value,
    time: event.target.time.value,
    ingredients: event.target.ingredients.value,
  };
  event.target.reset(); //Reset the user input field

  addRecipe(submitObj);
});

function addRecipe(submitObj) {
  const { title, time, ingredients } = submitObj;
  mainEl.insertAdjacentHTML(
    "afterend",
    `<article><h2>title: ${title}</h2><h3>Time:${time}</h3><p>Ingredients:${ingredients}</p><button>remove</button></article>`
  );
}
