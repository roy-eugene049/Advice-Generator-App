const idBox = document.querySelector(".id-box");
const adviceBox = document.querySelector(".advice-box");
const adviceBtn = document.querySelector(".advice-button");

async function getAdvice() {
  let response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
  let data = await response.json();
  let adviceId = data.slip.id;
  let advice = data.slip.advice;

  idBox.innerHTML = adviceId;
  adviceBox.innerHTML = advice;
}

adviceBtn.addEventListener("click", () => getAdvice());

document.onload = getAdvice();
