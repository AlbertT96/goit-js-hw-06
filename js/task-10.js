function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function createBoxes(amount) {
  const div = document.createElement("div");
  div.style.height = "30px";
  div.style.width = "30px";
  div.style.backgroundColor = "#000";
  document.body.append(div);
}
 