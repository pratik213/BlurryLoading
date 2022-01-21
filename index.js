const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
var slider = document.getElementById("myRange");

let load = 0
loadText.style.opacity = 0



const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

slider.addEventListener("input", (e) => {
    // alert(e.target.value)
    load = e.target.value
    loadText.innerText = `${load}%`
    loadText.style.opacity = load / 100 * 1
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`



})