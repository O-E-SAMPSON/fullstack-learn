

// Gallery Soft

const input = document.querySelector(".file");
const button = document.querySelector(".add");
const remove = document.querySelector(".remove");
const gallery = document.querySelector(".gallery");


button.addEventListener("click", () => {
    const files = input.files;
    for (let i = 0; i < files.length; i++) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(files[i]);
        gallery.append(img);
        localStorage.getItem("user", img);
        const saved = localStorage.getItem("user");
        gallery.append(saved);
        localStorage.clear();

        /*        
         remove.addEventListener("click", () => {
                    gallery.remove(img);
                })
        */
    }
})