
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127?note=5&request_method=POST')
    .then(res => res.text())
    .then(data =>{
            console.log(data.data)
    })
function cancionAnterior(){}
function play(){}
function pausa(){}
function cancionSiguiente(){}

