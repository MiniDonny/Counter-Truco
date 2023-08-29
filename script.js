/*-----------------------------------US-------------------------------------------------*/
/*Guardar el valor del contador en una variable Us*/
var us = 0
/*Capturar el h2 del contador Us*/
var h2us = document.querySelector(".us")
/*Mostrar el valor del contador actualizado Us*/
function updateUs() {
    h2us.innerHTML = us
}
/*Declarar la funcion suma Us*/
function addUs() {
    if(us == 30){
        us = 30
    } 
    else {
        us = us + 1
    }
    updateUs()
}
/*Declarar la funcion restar Us*/
function subtractUs() {

    if(us == 0){
        us = 0
    } 
    else {
        us = us - 1
    }
    updateUs()
}
/*Declarar funcion reiniciar Us*/
function restartUs() {
    us = 0
    updateUs()
}
/*-----------------------------------THEY-------------------------------------------------*/
/*Guardar el valor del contador en una variable They*/
var they = 0
/*Capturar el h2 del contador*/
var h2they = document.querySelector(".they")
/*Mostrar el valor del contador actualizado They*/
function updateThey() {
    h2they.innerHTML = they
}
/*Declarar la funcion suma They*/
function addThey() {
    if(they == 30){
        they = 30
    } 
    else {
        they = they + 1
    }
    updateThey()
}
/*Declarar la funcion restar They*/
function subtractThey() {

    if(they == 0){
        they = 0
    } 
    else {
        they = they - 1
    }
    updateThey()
}
/*Declarar funcion reiniciar They*/
function restartThey() {
    they = 0
    updateThey()
}


