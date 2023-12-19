const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(unblur, 50)

function unblur() {
    load++
    
    if(load > 99) {
            clearInterval(int)
        }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

/* a nice method taken from stackoverflow, that maps a range of numbers to 
    another range of numbers, in this case, it's mapping the loading progress
    to opacity (of text indicator) and to blur levels (of background) */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}