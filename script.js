const openLetter = document.getElementById("open-letter");
const letterMessage = document.getElementById("lettermsg");

if (openLetter && letterMessage) {
    openLetter.addEventListener("click", function () {
        letterMessage.hidden = false;
        openLetter.textContent = "Your letter is open ♡";
        openLetter.disabled = true;
    });
}
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", function () {
        surpriseMessage.hidden = false;
        surpriseButton.hidden = true;
    });
}