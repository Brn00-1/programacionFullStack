

//(ayuda de ia)

document.getElementById("btnChiste").addEventListener("click", chiste);

async function chiste() {
    try {
        const tipo = document.getElementById("tipo").value;
        const categoria = document.getElementById("categoria").value;

        const link = `https://v2.jokeapi.dev/joke/Any?type=${tipo}&category=${categoria}`;

        console.log(link);

        const respuesta = await fetch(link);
        const data = await respuesta.json();

        if (!respuesta.ok || data.error) {
            document.getElementById("chiste").innerHTML =
                "Error al obtener chiste";
            return;
        }

        if (data.type === "single") {
            document.getElementById("chiste").innerHTML =
                `<p>${data.joke}</p>`;
        } else {
            document.getElementById("chiste").innerHTML =
                `<p>${data.setup}</p><p>${data.delivery}</p>`;
        }
    } catch (error) {
        document.getElementById("chiste").innerHTML =
            "Error al obtener chiste";
    }
}