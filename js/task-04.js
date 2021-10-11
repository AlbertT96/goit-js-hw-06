const qs = (selector) => document.querySelector(selector);

const btnDec = qs('button[data-action="decrement"]');
const textCountVal = qs("#counter #value");
const btnInc = qs('button[data-action="increment"]');

const countVal = 0;


let data = {
  counter: countVal
};


const updateDecrement = (e) => {
  const newData = { ...data, counter: data.counter - 1 };
  updateView(newData);
};
const updateIncrement = (e) => {
  const newData = { ...data, counter: data.counter + 1 };
  updateView(newData);
};

btnDec.addEventListener("click", updateDecrement);
btnInc.addEventListener("click", updateIncrement);


const updateView = (newData) => {
  textCountVal.textContent = String(newData.counter);
  data = newData;
};