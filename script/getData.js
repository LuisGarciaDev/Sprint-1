export const urlPerros = 'http://localhost:3001/perros/';
export const urlGatos = 'http://localhost:3000/gatos/';

export const getPerros = async () => {
    const resp = await fetch(urlPerros);
    const data = await resp.json();
    return data
}
export const getGatos = async () => {
    const resp = await fetch(urlGatos);
    const data = await resp.json();
    return data
}