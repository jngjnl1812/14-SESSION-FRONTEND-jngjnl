const num = document.getElementsByTagName("h1")[0]
const plusBtn = document.getElementsByTagName("button")[0]
const minusBtn = document.getElementsByTagName("button")[1]



plusBtn.addEventListener("click", function() {
    var currentNum = Number(num.innerText);
    num.innerText = currentNum + 1;
    var newNum = currentNum + 1;
    if (newNum < 0) {
    num.style.color = "red";
    }
    if (newNum > 0) {
    num.style.color = "green";
    }
    if (newNum == 0) {
    num.style.color = "black";
    }
})

minusBtn.addEventListener("click", function() {
    var currentNum = Number(num.innerText);
    num.innerText = currentNum - 1;
    var newNum = currentNum - 1;
    if (newNum < 0) {
    num.style.color = "red";
    }
    if (newNum > 0) {
    num.style.color = "green";
    }
    if (newNum == 0) {
    num.style.color = "black";
    }
})

