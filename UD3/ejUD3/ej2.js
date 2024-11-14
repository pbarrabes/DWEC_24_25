/* EJERCICIO 2 Mostrar un alert con las coordenadas de la pantalla en las que se ha pulsado un boton del raton en cualquier punto del documento. 
Incluir también con que botón se ha pulsado. AYUDA El evento "click" igual no es la mejor idea para este ejercicio*/

document.addEventListener("DOMContentLoaded", ejercicio2);
function ejercicio2(e){
    document.addEventListener("mousedown", (e)=>{
        console.log(e);
        alert(`Has pulsado en las coordenadas de la pantalla: ${e.screenX}:${e.screenY} con el boton ${e.button}`);
    })
} 