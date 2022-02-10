const urlPerfil = 'http://localhost:3004/perfil/';
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
        const { id, name, lastname, email } = user;
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
    await fetch(urlPerfil, {
        method: 'POST',
        body: JSON.stringify(editar),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
})
document.addEventListener("DOMContentLoaded",user)

/* formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    const editar = datos();
    const id = document.getElementById('id').value;
    await fetch(urlPerfil + id, {
        method: 'PUT',
        body: JSON.stringify(editar),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
}) */





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