const currentTime = () => {
    const elemento = document.querySelector("h1");
    let fecha = new Date(); 
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    horas = horas < 10 ? `0${horas}` : horas;
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    segundos = segundos < 10 ? `0${segundos}` : segundos;

    let tiempo = `${horas}:${minutos}:${segundos}`;
    
    elemento.innerHTML = tiempo;
    
}

currentTime();
setInterval(currentTime, 1000);