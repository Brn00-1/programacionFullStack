function agregar() {

    let texto = document.getElementById("tarea").value;

    if (texto === "") {
        document.getElementById("error").textContent =
            "Debes escribir una tarea";
        return;
    }

    document.getElementById("error").textContent = "";

    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = texto;

    let botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";

    botonCompletar.addEventListener("click", function () {
        nuevoElemento.classList.toggle("completada");
    });

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
        nuevoElemento.remove();
    });

    nuevoElemento.appendChild(botonCompletar);
    nuevoElemento.appendChild(botonEliminar);

    document.getElementById("lista").appendChild(nuevoElemento);

    document.getElementById("tarea").value = "";
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    agregar();
});