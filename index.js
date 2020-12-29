window.onload = () => {
  var iE = document.getElementById("email");
  var iP = document.getElementById("password");
  var le = document.getElementById("labelE");
  var lp = document.getElementById("labelP");
  iE.addEventListener("focus", () => {
    le.classList.add("selected");
  });
  iE.addEventListener("input", (event) => {
    const input = event.target.value;
    if (input == "" || input == " ") {le.classList.remove("filled");} else {le.classList.add("filled");}
    iE.addEventListener("blur", () => {le.classList.remove("selected");});
    iP.addEventListener("blur", () => {lp.classList.remove("selected");});
  });
  iE.addEventListener("focus", () => { le.classList.add("selected");});
  iP.addEventListener("focus", () => {lp.classList.add("selected");});
  iP.addEventListener("input", (event) => {
    const input = event.target.value;
    if (input == "" || input == " ") {lp.classList.remove("filled");} else {lp.classList.add("filled");}
  });
};