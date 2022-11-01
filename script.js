const score = document.querySelector("#score");

let clicks = 0;

button.addEventListener("click", () => {
    let color = "#";
    color += Math.random().toString(16).slice(2,8);
    score.style.color = color;

    clicks += 1;
    score.innerHTML = clicks;
})
