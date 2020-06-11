function bin2Dec(bin){
    let res = bin
    .trim()
    .split('')
    .reverse()
    .map((x,y)=> x * Math.pow(2,y))
    .reduce((x,y)=>x = x + y)
    return res
}

console.log(bin2Dec('111'))

// Form Script
document.querySelector('#form').addEventListener('submit',e => {
    e.preventDefault()
    setOutput(bin2Dec(getInput()))
})

function getInput(){
    return document.querySelector('#input').value
}
function setOutput(text) {
    document.querySelector('#output').innerHTML = text
}

document.querySelector('#input').addEventListener('keypress',e=>{
    console.log( e.code)
    if(e.code != 'Digit0' || e.code != 'Digit1' || e.code != 'Numpad0' || e.code != 'Numpad0'){
        return
    }
})