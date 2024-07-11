const textEl = document.querySelector(".form-control");
const resultEl = document.querySelector(".result");
const btnEl = document.querySelector(".btn");
const resetBtnEl = document.querySelector(".btn-reset");
btnEl.addEventListener("click", () => {
  findLongWord();
});
resetBtnEl.addEventListener("click", () => {
  textEl.value = "";
  resultEl.textContent = "";
});

function findLongWord() {
  let word = textEl.value.split(" ");

  let longWord = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > longWord.length) {
      longWord = word[i];
    }
  }
  resultEl.textContent = longWord;
}
