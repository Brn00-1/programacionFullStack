const API_KEY = "live_WMllCG0kiur9peVasOxKwoWmrl3fvYb5GGwVH5EeFLdgFPtEyaTRzcC71eMAhPKe";

let imagenActualId = "";
let imagenActualUrl = "";

let likes = 0;
let dislikes = 0;

const imagenGato = document.getElementById("imagenGato");
const mensaje = document.getElementById("mensaje");
const likesSpan = document.getElementById("likes");
const dislikesSpan = document.getElementById("dislikes");

document.getElementById("btnGato").addEventListener("click", traerGato);
document.getElementById("btnLike").addEventListener("click", () => votar(1));
document.getElementById("btnDislike").addEventListener("click", () => votar(0));

async function traerGato() {
    try {
        mensaje.textContent = "Cargando gato...";

        const res = await fetch("https://api.thecatapi.com/v1/images/search");
        const data = await res.json();

        imagenActualId = data[0].id;
        imagenActualUrl = data[0].url;

        imagenGato.src = imagenActualUrl;

        mensaje.textContent = "";

    } catch (error) {
        mensaje.textContent = "Error al cargar el gato";
    }
}

async function votar(valor) {
    if (!imagenActualId) {
        mensaje.textContent = "Primero carga un gato";
        return;
    }

    try {
        const res = await fetch("https://api.thecatapi.com/v1/votes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY
            },
            body: JSON.stringify({
                image_id: imagenActualId,
                value: valor,
                sub_id: "usuario_1"
            })
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Error al votar");
        }

        if (valor === 1) {
            likes++;
            likesSpan.textContent = likes;
            mensaje.textContent = " Te gustó el gato";
        } else {
            dislikes++;
            dislikesSpan.textContent = dislikes;
            mensaje.textContent = " No te gustó el gato";
        }

       
        traerGato();

    } catch (error) {
        console.log(error);
        mensaje.textContent = "Error al registrar el voto";
    }
}