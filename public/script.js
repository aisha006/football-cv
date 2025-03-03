document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar span");

    progressBars.forEach((bar) => {
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.width = bar.getAttribute("style").match(/\d+/)[0] + "%";
        }, 500);
    });
});
