let mensaje="";


mensaje+=`El numero de parrafos es: ${document.querySelectorAll("p").length}\n`;
mensaje+=`Los 20 primeros`

//Número de párrafos que contiene el documento.


//Los 20 primeros caracteres del primer párrafo.
//Opcion con getElementsByTagName
//mensaje+=`Los 20 primeros caracteres del primer párrafo: ${document.getElementsByTagName("p").item(0).innerText.substring(0,20)}\n`;
//Opcion con querySelector. Funciona por ser el priemr parrafo.
//mensaje+=`Los 20 primeros caracteres del primer párrafo: ${document.querySelector("p").innerText.substring(0,20)}\n`;
//Opcion con querySelectorAll.
mensaje+=`Los 20 primeros caracteres del primer párrafo: ${document.querySelectorAll("p")[0].innerText.substring(0,20)}\n`;//Uso [0] en lugar de item(0)

//El número de enlaces.
mensaje+=`El número de enlaces: ${document.querySelectorAll("a").length}\n`;
//La dirección a la que apunta el segundo enlace.
mensaje+=`La dirección a la que apunta el segundo enlace: ${document.querySelectorAll("a")[1].href}\n`;
//La dirección a la que apunta el penúltimo enlace.
mensaje+=`La dirección a la que apunta el penúltimo enlace: ${document.querySelectorAll("a")[document.querySelectorAll("a").length-2].href}\n`;
//El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”
mensaje+=`El numero de enlaces que apuntan a “https://www.cpifppiramide.com/”: ${document.querySelectorAll("a[href='https://www.cpifppiramide.com/']").length}\n`;
//El número de enlaces que hay en el segundo párrafo.
mensaje+=`El número de enlaces que hay en el segundo párrafo: ${document.querySelectorAll("p")[1].querySelectorAll("a").length}\n`;
//El número de enlaces hijos de un H2 que tenga la clase resaltado
mensaje+=`El número de enlaces hijos de un p que tenga color red: ${document.querySelectorAll("p.resaltado  a").length}\n`;
console.log(document.querySelectorAll("p.resaltado > a"));

document.getElementById("mostrarInformacion").innerText=mensaje;

