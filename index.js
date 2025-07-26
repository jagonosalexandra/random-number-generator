const myBtn = document.getElementById("myBtn");
const myRandomNum = document.getElementById("myRandomNum")

let randomNum;

myBtn.onclick = function() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    if (min && max) {
        min = Number(min);
        max = Number(max);
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        myRandomNum.textContent = randomNum;
    } else {
        window.alert("Please enter a minimum and maximum value.");
    }
}