let container = document.querySelector(".d-cs_carousel-track");
let innerContainer = document.querySelector(".d-cs_carousel-list");

let pressed = false;
let startX;
let x;

container.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerContainer.offsetLeft;
    container.style.cursor = "grabbing";
});

container.addEventListener("mouseenter", () => {
    container.style.cursor = "grab";
});

container.addEventListener("mouseup", () => {
    container.style.cursor = "grab";
    pressed = false;
});

container.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    innerContainer.style.left = `${x - startX}px`;
});

let boundItems = () => {
    let outer = container.getBoundingClientRect();
    let inner = innerContainer.getBoundingClientRect();

    if (parseInt(innerContainer.style.left) > 0) {
    innerContainer.style.left = "0px";
    }

    if (inner.right < outer.right) {
    innerContainer.style.left = `-${inner.width - outer.width}px`;
    }
};


container.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    innerContainer.style.left = `${x - startX}px`;
    boundItems();
});