


const input = document.querySelector(".input");
const button = document.querySelector(".add");
const ul = document.querySelector(".list");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;

    ul.append(li);

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    deletebtn.addEventListener("click", () => {
        li.remove()
    })

    li.append(deletebtn)
})