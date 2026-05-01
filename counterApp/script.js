

const counter = document.querySelector(".count");
const increase = document.querySelector(".add");
const reset = document.querySelector(".set");
const decrease = document.querySelector(".sub");

let count = 0;

increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;
})

decrease.addEventListener("click", () => {
    count--;
    counter.textContent = count;
})

reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
})


/*const count = document.querySelector(".count");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".rest");
const increase = document.querySelector(".increament");


count = 0;
decrease.addEventListener("click", () => {
    count--
    count.textContent = count;
})
*/