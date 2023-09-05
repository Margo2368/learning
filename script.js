function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//  console.log(document.body);

// function test() {
//   document.body.style.backgroundColor = getRandomHexColor();
// }
//  test();
// setInterval(test, 340);

// console.log(window.getComputedStyle(document.body).backgroundColor);
const body = document.body;
const bodystyles = window.getComputedStyle(body);
console.log(bodystyles);
const object = {
  alex: {
    barby: 1,
  },
  margo: {
    baby: 10,
  },
};
