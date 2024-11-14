/* EJERCICIO 7  
Crea un input tipo texto y que al salir del campo el contenido se pase a mayúsculas automáticamente. */
document.addEventListener("DOMContentLoaded", ejercicio7);

function ejercicio7(e){
    const input=document.createElement("input");
    input.type="text";
    input.placeholder="Introduce tu nombre";
    document.body.append(input);
    input.addEventListener("input", (e)=>{//con evento input se pasa directo. Otra opcion seria con blur o change
        e.target.value=e.target.value.toUpperCase();
    })
} 