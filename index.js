let homeNum = 0
let guestNum = 0
//let homeNum = document.getElementById("home-num")
//document.getElementById("home-num").textContent = homeNum
//document.getElementById("guest-num").textContent = guestNum



function plus1() {
    homeNum += 1
    document.getElementById("home-num").textContent = homeNum
}

function plus2() {
    homeNum += 2
    document.getElementById("home-num").textContent = homeNum
}

function plus3() {
    homeNum += 3
    document.getElementById("home-num").textContent = homeNum
}

function plusg1() {
    guestNum += 1
    document.getElementById("guest-num").textContent = guestNum
}

function plusg2() {
    guestNum += 2
    document.getElementById("guest-num").textContent = guestNum
}

function plusg3() {
    guestNum += 3
    document.getElementById("guest-num").textContent = guestNum
}

function resetScores() {
    homeNum = 0
    guestNum = 0
    document.getElementById("home-num").textContent = homeNum
    document.getElementById("guest-num").textContent = guestNum
}