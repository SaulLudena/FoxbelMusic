    fetch('https://api.deezer.com/user/2529/playlists')
    .then(res => res.text())
    .then(data =>{
            console.log(data)
    })