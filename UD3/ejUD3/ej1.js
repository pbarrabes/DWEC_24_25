/*EJERCICIO  1 Asigna un manejador de evento a los dos momentos de carga de la pagina (DOMContentLoaded, load) muestra el tipo de evento y el target.*/
document.addEventListener("DOMContentLoaded", mostrarInfo);
window.addEventListener("load", mostrarInfo);
window.addEventListener("beforeunload", mostrarInfo);

function mostrarInfo(e){
    alert(`El evento disparados es ${e.type}`);
    console.log(`El evento disparados es ${e.type}`);
    e.preventDefault()
    e.returnValue=true;//En algunos navegadores como Chrome es necesario añadr esto para poder cancelarlo y ni por esas...
} 