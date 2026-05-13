const preguntas = [

{
    pregunta: "¿Cuál es la capital de Uruguay?",
    opciones: [
        "A) Montevideo",
        "B) Buenos Aires",
        "C) Asunción",
        "D) Santiago"
    ],
    correcta: "A"
},

{
    pregunta: "¿Qué bebida es tradicional en Uruguay?",
    opciones: [
        "A) Café",
        "B) Mate",
        "C) Té",
        "D) Chocolate"
    ],
    correcta: "B"
},

{
    pregunta: "¿Cuántos mundiales ganó Uruguay?",
    opciones: [
        "A) 1",
        "B) 5",
        "C) 2",
        "D) 3"
    ],
    correcta: "C"
},

{
    pregunta: "¿Cuál es un famoso balneario uruguayo?",
    opciones: [
        "A) Cancún",
        "B) Punta del Este",
        "C) Río de Janeiro",
        "D) Miami"
    ],
    correcta: "B"
}

];

let actual = 0;
let puntaje = 0;

function mostrarPregunta(){

    document.getElementById("pregunta").innerText =
    preguntas[actual].pregunta;

    const botones =
    document.querySelectorAll(".opcion");

    botones.forEach((btn, index)=>{

        btn.innerText =
        preguntas[actual].opciones[index];

        btn.classList.remove(
            "correcta",
            "incorrecta"
        );
    });

    document.getElementById("resultado").innerText = "";
}

function verificar(respuesta){

    const correcta =
    preguntas[actual].correcta;

    const botones =
    document.querySelectorAll(".opcion");

    botones.forEach(btn => {

        if(btn.innerText.startsWith(correcta)){

            btn.classList.add("correcta");
        }

        else if(btn.innerText.startsWith(respuesta)){

            btn.classList.add("incorrecta");
        }

    });

    if(respuesta === correcta){

        puntaje++;

        document.getElementById("resultado")
        .innerText = "✅ ¡Correcto!";
    }

    else{

        document.getElementById("resultado")
        .innerText = "❌ Incorrecto";
    }

    document.getElementById("puntaje")
    .innerText = puntaje;
}

function siguientePregunta(){

    actual++;

    if(actual >= preguntas.length){

        document.querySelector(".card").innerHTML = `

        <h1 class="text-center">
        🇺🇾 Juego terminado
        </h1>

        <h2 class="text-center mt-4">
        Puntaje final: ${puntaje}/${preguntas.length}
        </h2>

        <div class="text-center mt-4">
            <button class="btn btn-warning"
            onclick="location.reload()">
            Jugar otra vez
            </button>
        </div>
        `;

        return;
    }

    mostrarPregunta();
}

mostrarPregunta();