const fav = document.getElementById('favoritos');
const urlFavoritos = 'http://localhost:3003/favoritos';


fav.addEventListener('click', () => {
    console.log('pruebaaa')
    const favid = JSON.parse(localStorage.getItem('Mascota'));
    favid.forEach(element => {
        const { imgcard, id } = element;
        const objFav = {
            id,
            imgcard
        }
        fetch(urlFavoritos, {
            method: 'POST', 
            body: JSON.stringify(objFav),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })  
    })
})