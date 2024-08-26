const mainEl = document.querySelector("main aside");
const formEl = document.querySelector("main aside form");

formEl.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  //Recipe Info Obj
  const submitObj = {
    title: event.target.title.value,
    time: event.target.time.value,
    ingredients: event.target.ingredients.value,
  };
  event.target.reset(); //Reset the user input field

  //Regular Function
  addRecipe(submitObj);
});

function addRecipe(submitObj) {
  //Destructuring Object
  const { title, time, ingredients } = submitObj;
  mainEl.insertAdjacentHTML(
    "afterend",
    `<article><h2>title: ${title}</h2><h3>Time:${time}</h3><p>Ingredients:${ingredients}</p><button>remove</button></article>`
  );
  const newRecipe = document.querySelector("main article");
  const removeBtn = document.querySelector("article button");

  //Event listener
  removeBtn.onclick = function () {
    newRecipe.remove();
  };
}
