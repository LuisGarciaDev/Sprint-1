/* import {getPerros} from './getData.js';
import { getGatos } from './getData.js'; */

const dog = document.getElementById('perro');
const cat = document.getElementById('gato');
/* const mostrarDog = document.getElementById('mostrarperros');
const mostrarCat = document.getElementById('mostrargatos'); */
let mostrarElementos = document.getElementById('mostrarMascotas');

dog.addEventListener('click', () => {
    getElementos('http://localhost:3001/perros')
})

cat.addEventListener('click', () => {
    getElementos('http://localhost:3000/gatos')
})

const getElementos = async (url) => {
    const pets = document.querySelector('.pets')
    console.log(url)
    mostrarElementos.innerHTML = ''
    const resp = await fetch(url)
    const data = await resp.json()
    data.forEach(element => {
        const { id, imgcard } = element
        mostrarElementos.innerHTML += `
        <div class="col elementos">
                <a href="#" class="enlace-detalle-elemento">
                    <div class="">                
                        <img src="${imgcard}" id="${id}" class="pets card-img" alt="...">
                    </div>
                </a>
            </div>
        `
    });
    mostrarElementos.addEventListener('click', async (e) => {
        
        const boton = e.target.classList.contains('pets');
        const id = e.target.id;
    
        if (boton){
            
            console.log('prueba')
            const infoMascotas =await (data);
            const info = infoMascotas.filter(item=>item.id=== Number(id));
            console.log('prueba')
    
            console.log(info)
            localStorage.setItem("Mascota", JSON.stringify(info))
            window.location.href="mascota.html";
        }
    
    });

}

/* 
const pets = document.querySelector('.pets')
mostrarElementos.addEventListener('click', async (e) => {
    const boton = e.target.classList.contains('pets');
    const id = e.target.id;

    if (boton){

        const infoMascotas =(url)
        const info = infoMascotas.filter(item=>item.id=== Number(id));

        console.log(info)
        localStorage.setItem("Mascota", JSON.stringify(info))
        window.location.href="mascota.html";
    }

});  */






    /* if (e.target.classList.contains('btn')) {

        let peliculas = e.srcElement.id;

        data.forEach(item => {
            const { id, nombre, image, descripcion } = item;

            if (peliculas == id) {
                contenedor.innerHTML = `
                <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">${nombre}</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                   <center>
                       <img class="img3" src="${image}" alt="">
                   </center>
                   <p>${descripcion}</p>
               </div>
                   `
            }
        })

    }
}) */