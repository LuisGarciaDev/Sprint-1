const urlChats = 'http://localhost:3004/chats/';
const mensajes = async () => {
    const resp = await fetch(urlChats);
    const data = await resp.json();
    return data
}

let mensajechat = document.getElementById('inputChat');
const chat = () =>{
    let tiempo = new Date()
    mensajechat.addEventListener('change', async (e) =>{
        e.preventDefault()
        const mensaje = e.target.value;
        const hora = tiempo.getHours()
        const minutos = tiempo.getMinutes()
        const objetoMensaje = {
            mensaje,
            hora,
            minutos
        }
        await fetch (urlChats, { 
            method: 'POST',
            body: JSON.stringify(objetoMensaje),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
    }) 
}

const misMensajes = document.getElementById('chat');
let texto = document.createElement('div');
document.addEventListener('DOMContentLoaded', async (e) => {
    chat();
    const data = await mensajes();
    console.log(data);
    data.forEach(element => {
        const {mensaje, hora, minutos} = element;
        texto.innerHTML += `<div class="hora2">
        <h2>${hora}:${minutos}</h2>
    </div>
        <div class="m2"> 
        <p>${mensaje}</p>
    </div>
        `
    misMensajes.appendChild(texto);
    });
});

/* { <div class="envio-mensaje">
            <p class="hora-envio-mensaje">${hora}:${minutos}</p>
            <div class="div-text-envio">
                <p clas="text-mensaje-envio">${mensaje}</p>
            </div>
        </div> } */