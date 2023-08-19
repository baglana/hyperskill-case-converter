let textArea = document.querySelector("textarea");
let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceCaseBtn = document.getElementById("sentence-case");
let saveTxtFileBtn = document.getElementById("save-text-file");


upperCaseBtn.addEventListener("click", () => {
  textArea.value = textArea.value.toUpperCase();
});

lowerCaseBtn.addEventListener("click", () => {
  textArea.value = textArea.value.toLowerCase();
});

properCaseBtn.addEventListener("click", () => {
  let srcText = textArea.value.toLowerCase();
  let tokens = srcText.split(" ");
  for (i in tokens) {
    tokens[i] = tokens[i].substring(0, 1).toUpperCase()
      + tokens[i].substring(1);
  }
  textArea.value = tokens.join(" ");
});

sentenceCaseBtn.addEventListener("click", () => {
  let srcText = textArea.value.toLowerCase();
  let tokens = srcText.split(". ");
  for (i in tokens) {
    tokens[i] = tokens[i].substring(0, 1).toUpperCase()
      + tokens[i].substring(1);
  }
  textArea.value = tokens.join(". ");
});

saveTxtFileBtn.addEventListener("click", () => {
  let filename = "text.txt";
  download(filename, textArea.value);
});

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}