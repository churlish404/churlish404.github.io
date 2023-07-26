document.getElementById("switch").addEventListener("click", () => {
  const main = document.main;
  if (main.classList.contains(light)) {
    main.classList.replace("light", "dark");
  } else {
    body.classList.replace("dark", "light");
  }
});
