const urlChats = 'http://localhost:3004/chats/';
let mostrarMensaje = document.getElementById('mostrar');

document.addEventListener('DOMContentLoaded', async ()=>{
    console.log('prueba')
    
    const resp = await fetch(urlChats)
    const data = await resp.json()
    data.forEach(element => {
        const { mensaje, hora, minutos } = element;
        mostrarMensaje.innerHTML += `
    <a href="chat.html">
    <div class="cajamensaje">
        <img src="https://previews.123rf.com/images/sanneberg/sanneberg1704/sanneberg170402627/76796479-blue-eyed-mujer-rubia-sonriendo-a-la-c%C3%A1mara.jpg" alt="">
        <h1><b>Maria Dolores</b></h1>
        <h2>${hora}:${minutos}</h2>
        <p>${mensaje}</p>
        <i class="bi bi-chevron-right"></i>
    </div>
    </a>
</div>
        `    
    })
    
})