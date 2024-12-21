const textBox = document.querySelector('textarea');
const controllers = document.querySelector('.controllers');

function upperCase(){
    const upper = textBox.value.toUpperCase();
    textBox.value = upper;
}
function lowerCase(){
    const lower = textBox.value.toLowerCase();
    textBox.value = lower;
}
function Reverse(){
    const reverse = textBox.value.split("").reverse().join("");
    textBox.value = reverse;
}
function splitAllText(){
    const split = textBox.value.split("").join(" ");
    textBox.value = split;
}
function deleteAll(){
   textBox.value = "";
}