/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnConvert = document.getElementById("btn-convert")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


btnConvert.addEventListener("click", function(){
    let inputValue     
    
    if(!parseFloat(document.getElementById("input-el").value)){
        inputValue = 0
    }else{
        inputValue = parseFloat(document.getElementById("input-el").value)
    }
    
    let meters = inputValue * 0.3048
    let feet = inputValue * 3.28084
    
    let liters = inputValue * 3.78541
    let gallons = inputValue * 0.264172
    
    let kilos = inputValue * 0.453592
    let pounds = inputValue * 2.20462
    
    lengthEl.textContent = `${inputValue} meters = ${feet.toFixed(3)} feet | ${inputValue} feet = ${meters.toFixed(3)} meters`
    
    
    volumeEl.textContent = `${inputValue} liters = ${gallons.toFixed(3)} gallons | ${inputValue} gallons = ${liters.toFixed(3)} liters`
    
    massEl.textContent = `${inputValue} kilos = ${pounds.toFixed(3)} pounds | ${inputValue} pounds = ${kilos.toFixed(3)} kilos`
    
})