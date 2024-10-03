document.write("<p>Parrafo añadido con document.write 1</p>")//Deberia funcionar??? Analizalo y piensa el motivo.
document.body.innerHTML="<p>parrafo añadido con innerHtml</p>";// Que ha pasado con el Contenido previo??. Analiza lo que ha pasado
console.log("Estas aqui");
console.error("Mensaej de error personalizado");