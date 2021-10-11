const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const qs = (selector) => document.querySelector(selector);

const list = qs("#ingredients");

console.log(list);

ingredients.forEach(ele => {
  let ingredEle = document.createElement("li");
  ingredEle.textContent = ele;
  ingredEle.classList.add("item");
  list.append(ingredEle);
  console.log(ingredEle);

});