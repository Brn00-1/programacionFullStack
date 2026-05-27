function cambiartexto() {
    document.getElementById("titulo").textContent = "Cambiado";
}



function cambiarparrafo() {
document.getElementById("parrafo").innerHTML = "Cambiado";

}


    function cambiarimagen() {
        document.getElementById("imagen").src = "er.webp";
    }


    function mostrar() {
   let texto = document.getElementById("nombre").value;

   alert(texto);
}

function cambiarColor() {

   let color = document.getElementById("texto");

   color.classList.add("texto");
}

function quitarColor() {

   let color = document.getElementById("texto");

    color.classList.remove("texto");

}
 
 function modooscuro() {

   let color = document.querySelector("#oscuro");

    color.classList.toggle("oscuro");

}

function agregar() {

  
   let nuevoElemento = document.createElement("li");


   nuevoElemento.textContent = "Nuevo producto";

   
   document.getElementById("li")
           .appendChild(nuevoElemento);
}