/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthConvertor= document.getElementById("length-convertor")
let volumeConvertor = document.getElementById("volume-convertor")
let massConvertor = document.getElementById("mass-convertor")





convertBtn.addEventListener("click",function(){
    
    lengthConvertor.innerHTML =`${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters` 
    
    volumeConvertor.innerHTML =`${inputEl.value} litres = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} litres` 
    
    massConvertor.innerHTML =`${inputEl.value} kilos = ${(inputEl.value*2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilos` 
    
    
})
