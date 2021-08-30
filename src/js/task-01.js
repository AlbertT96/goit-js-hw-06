const qs = (selector) => document.querySelector(selector);
const qsall = (selector) => document.querySelectorAll(selector);

const items = qsall("li.item");

console.log(`Num of cat: ${items.length}`);

[...items].forEach((item) => {
    console.log(`Cat: ${item.children[0].textContent}`);
    console.log(`Ele: ${item.children[1].children.length}`);
});