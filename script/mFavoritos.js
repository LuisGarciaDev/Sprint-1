const urlFavoritos = 'http://localhost:3003/favoritos';
let mostrarFavoritos = document.getElementById('mostrarFavoritos');

document.addEventListener('DOMContentLoaded', async ()=>{
    
    const resp = await fetch(urlFavoritos)
    const data = await resp.json()
    data.forEach(element => {
        const { id, imgcard } = element;
        mostrarFavoritos.innerHTML += `
        <div class="col elementos pets">
                <a href="#" class="enlace-detalle-elemento">
                    <div class="">                
                        <img src="${imgcard}" id="${id}" class="pets card-img" alt="...">
                    </div>
                </a>
            </div>
        `
        
    })
    
})