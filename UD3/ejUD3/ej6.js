/* EJERCICIO 6
Crea un parrafo con un texto y que cada vez entres al parrafo cambie el color del texto de negro a rojo y viceversa al salir. */

//En esta solucion lo creo yo el parrafo desde js.


document.addEventListener("DOMContentLoaded", ()=> {
   
    const p = document.createElement("p");
    p.textContent = "Este es un párrafo de ejemplo.";
    document.body.append(p);
    p.addEventListener("mouseenter", function() {
        p.style.color = "red";
        //asi es directo, mas correcto gestionando una clase
    });

    p.addEventListener("mouseleave", function() {
        p.style.color = "black";
    });
});