const buttons = document.querySelectorAll('.buttons')
const yesButton = document.getElementById('yes')
const noButton = document.getElementById('no')

yesButton.onclick = function nextPage() {
    window.location.href = "yes.html";
}

noButton.onmouseover = function moveButton() {

    var x = Math.random() * (window.innerWidth - document.getElementById('no').offsetWidth) - 85;
    var y = Math.random() * (window.innerHeight - document.getElementById('no').offsetHeight) - 48;
    document.getElementById('no').style.left = `${x}px`;
    document.getElementById('no').style.top = `${y}px`;

}