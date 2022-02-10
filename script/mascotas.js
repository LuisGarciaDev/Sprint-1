const container = document.querySelector('#contenedor');

let mascotas = JSON.parse(localStorage.getItem("Mascota"));

// detallePerro = detallePerro !== null ? detallePerro : "";

const getDetallePerro = () => {

    mascotas.forEach(element => {

    const {nombre,imagen,raza,edad,historia,id,imgcard} = element;

    container.innerHTML += `
    <div class="tarjeta">

    <a href="index.html" class="img1"><i class="bi bi-arrow-left"></i></a>
    <img class="imgmas" src=${imagen} alt="">
    <div class="back">
        <div class="primer">
            <h1 class="name"> <b>${nombre}</b><img
                    src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644100967/Mascotas/male_prqd3u.png"
                    alt=""></h1>
                    <button id="favoritos" class="btnfav" ><i class="bi bi-heart-fill btnfav"></i></button>
        </div>
        <div class="razayedad">
            <h2><img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101392/Mascotas/raza_qrql1z.png"
                    alt="">${raza}</h2>
            <h2><img class="edad" src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101400/Mascotas/edad_jkbvb6.png"
                    alt="">${edad}</h2>
        </div>
        <div class="ubicacion">
        <p><i class="bi bi-geo-alt"></i>4140 Parker Rd. Allentown, <br>
                  New Mexico 31134</p>
        <h2><b>Personalidad</b></h2>
        </div>
        <div class="cajas">
            <div class="borders">
                <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/cari%C3%B1oso_huowhg.png"
                    alt="">
                <p>Cariñoso</p>
            </div>
            <div class="borders">
                <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/inquieto_aqaxfz.png"
                    alt="">
                <p>Inquieto</p>
            </div>
            <div class="borders">
                <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/jugueton_j7ksyv.png"
                    alt="">
                <p>Juguetón</p>
            </div>
        </div>
        <div class="historia">
            <h2><b>Historia de ${nombre}</b></h2>
            <p>${historia}</p>
        </div>
        <div class="publicado">
            
            <img src="./image/imgcontacto.png" alt="">
            
            <p>Publicado por <br>
                     <b>Maria Dolores</b></p>
            <a href="chat.html"><button>Contactar</button></a>
        </div>
    </div>
</div>
  `
});
}


document.addEventListener('DOMContentLoaded', getDetallePerro);










/* const mNombre = document.getElementById('m-nombre');
const mDireccion = document.getElementById('direccion');
const mImagen = document.getElementById('mImagen');
const mRaza = document.getElementById('raza');
const mEdad = document.getElementById('edad');
const nombreH = document.getElementById('nombreH');
const descripcion = document.getElementById('descripcion1');

const pyg = () => {
    const mascota = JSON.parse(localStorage.getItem('Mascota'))
    mascota.forEach(element =>{
        const {nombre, imagen, raza, sex, edad, direccion, historia, imgpublic, namepublic} = element;
        mNombre.textContent = nombre;
        mDireccion.textContent = direccion;
        mImagen.style.background = `url('${imagen}') no-repeat`;
        mImagen.setAttribute('src', imagen );
        mRaza.textContent=raza;
        mEdad.textContent=edad;
        nombreH.textContent+=nombre;
        descripcion.textContent=historia;
        
    })

} 
document.addEventListener("DOMContentLoaded",pyg)


const urlPerfil = 'http://localhost:3003/perfil/';
let formulario = document.getElementById('formulario');
let name = document.getElementById('name').value;
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let nameUser = document.getElementById('nameUser');
let imgUser = document.getElementById('imgUser');

const usuarios = async () => {
    const resp = await fetch(urlPerfil);
    const data = await resp.json();
    return data
}

const user = async () => {
    const data = await usuarios();
    console.log(data)
    data.forEach(user => {
        const { id, name, lastname, imagen, email } = user;
        // imgUser.setAttribute('src', imagen)
        nameUser.textContent = `${name} ${lastname}`;
        document.getElementById('id').value = id;
        document.getElementById('name').value = name;
        document.getElementById('lastname').value = lastname;
        document.getElementById('email').value = email;

    })
    console.log(nameUser)
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const editar = datos();
    const id = document.getElementById('id').value;
    await fetch(urlPerfil + id, {
        method: 'POST',
        body: JSON.stringify(editar),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})
document.addEventListener("DOMContentLoaded",user)







const datos = () => {
    let name = document.getElementById('name').value;
    console.log(name)
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    const imagen = './image/Ellipse 10.png';
    const objeto = {
        name,
        lastname,
        imagen,
        email
    }
    localStorage.setItem("Perfil", JSON.stringify(objeto));
    return objeto;
}
 */