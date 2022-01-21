const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let load = 0
let int = setInterval(blurring, 20)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }


    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
        // we are doing so beacuse we wan't to go from opaque to transparent    its value is going from 0 to 1


    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`
        // its value is going from 30 to 0 in same amount
}
const scale = (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    // this function is copied from stack overflow