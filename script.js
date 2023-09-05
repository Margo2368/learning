function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let text = 'm'

setInterval(() => {
    document.body.innerText += 'm'
    document.body.style.backgroundColor = getRandomHexColor();
    console.log(window.getComputedStyle(document.body).backgroundColor)
}, 2000)
