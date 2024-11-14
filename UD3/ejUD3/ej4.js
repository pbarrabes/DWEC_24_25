/* EJERCICIO 4 Mostrar un alert con la tecla que se ha pulsado. 
Indicar también si estaba pulsada simultáneamente la tecla Alt o la tecla Ctrl */
document.addEventListener("DOMContentLoaded", ejercicio4);
function ejercicio4 (){
    document.addEventListener("keydown", (e)=>{
        console.log(e);
        if(e.altKey || e.ctrlKey){//PAra evitar que salte ya con la tecla Alt o Ctrlb
            console.log("Has pulsado primero la tecla Alt o Ctrl");
        }else{
            alert(`Has pulsado la tecla: ${e.key} ${e.altKey ? "con la tecla Alt pulsada" : ""} ${e.ctrlKey ? "con la tecla Ctrl pulsada" : ""}`);
        }
    })
}