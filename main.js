document.getElementById("switch").addEventListener("click", () => {
  let body = document.body;
  let button = document.getElementById("switch");
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    button.innerHTML = "light";
  } else {
    body.classList.replace("dark", "light");
    button.innerHTML = "dark";
  }
});
