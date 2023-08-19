let textarea = document.querySelector("textarea");
let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceCaseBtn = document.getElementById("sentence-case");


upperCaseBtn.addEventListener("click", () => {
  textarea.value = textarea.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", () => {
  textarea.value = textarea.value.toLowerCase();
});

properCaseBtn.addEventListener("click", () => {
  let srcText = textarea.value.toLowerCase();
  let tokens = srcText.split(" ");
  for (i in tokens) {
    tokens[i] = tokens[i].substring(0, 1).toUpperCase()
      + tokens[i].substring(1);
  }
  textarea.value = tokens.join(" ");
});

sentenceCaseBtn.addEventListener("click", () => {
  let srcText = textarea.value.toLowerCase();
  let tokens = srcText.split(". ");
  for (i in tokens) {
    tokens[i] = tokens[i].substring(0, 1).toUpperCase()
      + tokens[i].substring(1);
  }
  textarea.value = tokens.join(". ");
});

