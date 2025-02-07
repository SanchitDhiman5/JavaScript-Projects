const btn = document.querySelectorAll(".button");

btn.forEach((element) => {
  element.addEventListener(
    "click",
    () => {
      let colorValue = element.getAttribute("id");
      document.body.style.backgroundColor = colorValue;
    },
    false
  );
});
