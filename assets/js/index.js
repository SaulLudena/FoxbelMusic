    /*
    -Antes de empezar, en la 'urlDeezer' del album de deezer tuve que anteponerle
    una url de heroku para evitar el problema 'access-control-allow-origin' (CORS)
    aún no comprendo al 100% el porqué del problema, pero al menos se solucionó.

    -Otro inconveniente es que la api solo soporta 50 peticiones (hice más de 50),
    de tal manera que el servidor no me permite acceder a los datos y se tiene que
    esperar ciertos minutos-horas para volver a intentarlo.
    */
    
    var urlDeezerAlbum = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/192713382'
    var urlDeezerArtista ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/75798'
    var urlDeezerCancion = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'
    var urlPrueba ='https://randomuser.me/api/'

    fetch(urlDeezerAlbum)
    .then(res => res.json(),e =>{
        if(status != 200){
        console.log("Obtención fallida de deezer",e)
        }else{
            console.log("Conexion exitosa")
        }
    })
    .then(data =>{

        //Mostrando datos de Adele
        //imagen
        var imagenAdele21 = document.getElementById("Imagen")
        imagenAdele21.innerHTML=`<img src="${data.cover_xl}" alt="Imagen no encontrada">`
       //nombreAlbum
        var albumAdele = document.getElementById("albumName")
        albumAdele.innerHTML=`${data.artist.name} ${data.title}`
       //nombreArtista
       var nombreAdele = document.getElementById("artistName")
       nombreAdele.innerHTML = `${data.artist.name}`
       //cantidadSeguidores
       
       fetch(urlDeezerArtista)
       .then(res => res.json(),e =>{
           if(status != 200){
           console.log("Obtención fallida de deezer",e)
           }else{
               console.log("Conexion exitosa")
           }
       })
       .then(data =>{})
       var seguidoresAdele = document.getElementById("followers")
       seguidoresAdele.innerHTML = `${data.nb_fan}`
   
        console.log(data)
    })



//    fetch(urlPrueba)
//   .then(res => res.json(),e =>{
//        if(status != 200){
//        console.log("Obtención fallida de free api user",e)
//        }else if(status == 200){
//            console.log("Conexion exitosa")
//        }
//    })
//    .then(data =>{
//        var id = document.getElementById("nombreArtista").value;
//           /* var cardContainer = document.getElementById("Imagen");
//            cardContainer.innerHTML=`<img src="${data.results['0'].picture.medium}" alt="Imagen no encontrada">`
//*/
//             console.log(data);
//    })