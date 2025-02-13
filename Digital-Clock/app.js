const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

const btn = document.querySelector("#themeToggle");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
