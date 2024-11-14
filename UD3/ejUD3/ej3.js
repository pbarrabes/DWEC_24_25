/* EJERCICIO 3 
Muestra en un párrafo de documento las coordenadas actualizadas en las que se encuentra el ratón cada vez que se mueva. */
document.addEventListener("DOMContentLoaded", ejercicio3);
function ejercicio3(){
    
    document.addEventListener("mousemove", (e)=>{
        document.querySelector("#mostrarInfo").textContent = `Coordenadas del ratón: ${e.clientX}:${e.clientY}`;
    })
}