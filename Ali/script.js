const CORRECT_PASSWORD = "31625";

const pinInput = document.getElementById("pin-input");
const pinHitArea = document.getElementById("pin-hit-area");

if (pinInput && pinHitArea) {

  const pinDots = document.querySelectorAll(".pin-dot");
  const errorMsg = document.getElementById("error-msg");

  pinHitArea.addEventListener("click", () => pinInput.focus());
  window.addEventListener("load", () => pinInput.focus());

  pinInput.addEventListener("input", () => {
    const val = pinInput.value.replace(/\D/g, "").slice(0, 5);
    pinInput.value = val;

    pinDots.forEach((dot, i) => {
      dot.classList.toggle("filled", i < val.length);
      dot.classList.remove("shake-error");
    });

    errorMsg.classList.remove("show");

    if (val.length === 5) {
      checkPassword(val);
    }
  });

  function checkPassword(val) {
    if (val === CORRECT_PASSWORD) {
      window.location.href = "gift.html";
    } else {
      errorMsg.classList.add("show");
      pinDots.forEach(dot => dot.classList.add("shake-error"));
      pinHitArea.classList.add("shake");

      setTimeout(() => {
        pinHitArea.classList.remove("shake");
        pinInput.value = "";

        pinDots.forEach(dot => {
          dot.classList.remove("filled");
          dot.classList.remove("shake-error");
        });
      }, 400);
    }
  }
}