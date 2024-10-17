let submissions = Number(window.localStorage.getItem("submissions")) || 0;
submissions++;
window.localStorage.setItem("submissions", submissions);
document.getElementById("count").textContent = submissions;