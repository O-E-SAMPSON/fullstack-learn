// JavaScript Code for Color Flipper.
const colors = ["green", "red", "yellow", "orange", "gray", "rgba(133, 122, 200)", "#f15025"];
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    colorText.textContent = colors[randomNumber];
})

