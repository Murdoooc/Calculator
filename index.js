function sumarNumbers (){
    var numberOne = parseInt(document.getElementById("numberOne").value);
    var numberTwo = parseInt(document.getElementById("numberTwo").value);
    let result = numberOne + numberTwo;
    document.getElementById("resultado").innerHTML = result
}
let sumar = document .getElementById("sumar");
sumar.addEventListener("click", sumarNumbers);

function restarNumbers (){
    var numberOne = parseInt(document.getElementById("numberOne").value);
    var numberTwo = parseInt(document.getElementById("numberTwo").value);
    let result = numberOne - numberTwo;
    document.getElementById("resultado").innerHTML = result
}
let restar = document.getElementById("restar");
restar.addEventListener("click", restarNumbers);

function multiplicarNumbers() {
    var numberOne = parseInt(document.getElementById("numberOne").value);
    var numberTwo = parseInt(document.getElementById("numberTwo").value);
    let result = numberOne * numberTwo;
    document.getElementById("resultado").innerHTML = result
}
let multiplicar = document.getElementById("multiplicar");
multiplicar.addEventListener("click", multiplicarNumbers);

function dividirNumbers(){
    var numberOne = parseInt(document.getElementById("numberOne").value);
    var numberTwo = parseInt(document.getElementById("numberTwo").value);
    let result = numberOne / numberTwo; 
    document.getElementById("resultado").innerHTML = result; 
}
let dividir = document.getElementById("dividir");
dividir.addEventListener("click", dividirNumbers);

document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});