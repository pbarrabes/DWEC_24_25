/* EJERCICIO 9
Haz un juego en el que el usuario tenga que adivinar una letra  aleatoria del abecedario pulsando en el teclado 
(No hay que introducirla en ningún campo de texto ni similar). Indicandole mayor o menor según el orden alfabético en un párrafo en el documento. 
*/
document.addEventListener("DOMContentLoaded", ejercicio9);
function ejercicio9(){
    const abecedario="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letraAleatoria=abecedario.charAt(Math.floor(Math.random()*abecedario.length));
    console.log(letraAleatoria);
    const p= document.createElement("p");
    p.textContent="Pulsa teclas para adivinarla letra escondida en el juego"
    document.body.append(p);
    document.addEventListener("keydown", (e)=>{//Se podria añadir que solo se pueda pulsar una letra y avise si se pulsa otra cosa por codigo??
        let letraPulsada=e.key.toUpperCase();
        if(letraPulsada===letraAleatoria){
            p.innerText=`Has acertado la letra`;
        }else if(letraPulsada<letraAleatoria){
            p.innerText=`La letra es mayor que ${letraPulsada}`;
        }else{
            p.innerText=`La letra es menor que ${letraPulsada}`;
        }
    })
}