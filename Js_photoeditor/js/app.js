$(document).ready(function () {
    let smokyBG = $('#wavybg-wrapper').waterpipe({
    //Default values
    gradientStart: '#054afa',
    gradientEnd: '#6b71e3',
    smokeOpacity: 0.05,
    numCircles: 1,
    maxMaxRad: '224',
    minMaxRad: '15',
    minRadFactor: 0,
    iterations: 8,
    drawsPerFrame: 10,
    lineWidth: 2,
    speed: 5,
    bgColorInner: "#2b2b2b",
    bgColorOuter: "#000000"
});
});
 
const grayscale = document.querySelector('#grayscale')
const contrast = document.querySelector('#contrast')
const brightness = document.querySelector('#brightness')
const sepia = document.querySelector('#sepia')
const saturate = document.querySelector('#saturate')
const invert = document.querySelector('#invert')
const rotate = document.querySelector('#rotate')
const img = document.querySelector('#image')
const reset = document.querySelector('#reset')
const imgUrl = document.querySelector('#img-url')

 
grayscale.addEventListener('input',updateFilterValue)
contrast.addEventListener('input',updateFilterValue)
brightness.addEventListener('input',updateFilterValue)
sepia.addEventListener('input',updateFilterValue)
saturate.addEventListener('input',updateFilterValue)
invert.addEventListener('input',updateFilterValue)
rotate.addEventListener('input',updateFilterValue)

reset.addEventListener('click',resetFilterValue)

imgUrl.addEventListener('input',changeImg)

const defaults = {
  grayscale: 0,
  contrast: 100,
  brightness: 100,
  sepia: 0,
  saturate: 100,
  invert: 0,
  rotate: 0
}

function updateFilterValue(){
  reset.disabled = false
  
  img.style.filter = `
    grayscale(${grayscale.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    saturate(${saturate.value}%)
    invert(${invert.value}%)
    hue-rotate(${rotate.value}deg)
  `
}

function resetFilterValue(){

img.style.filter = `
    grayscale(${defaults['grayscale']}%)
    contrast(${defaults['contrast']}%)
    brightness(${defaults['brightness']}%)
    sepia(${defaults['sepia']}%)
    saturate(${defaults['saturate']}%)
    invert(${defaults['invert']}%)
    hue-rotate(${defaults['rotate']}deg)
  `

  grayscale.value = defaults['grayscale']
  contrast.value = defaults['contrast']
  brightness.value = defaults['brightness']
  sepia.value = defaults['sepia']
  saturate.value = defaults['saturate']
  invert.value = defaults['invert']
  rotate.value = defaults['rotate']

  reset.disabled = true
}

function changeImg(){
  img.src = imgUrl.value
}