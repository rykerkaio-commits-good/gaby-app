import amor from "./data/amor.js";
import mensajes from "./data/mensajes.js";
import cartas from "./data/cartas.js";
import preguntas from "./data/preguntas.js";
import capitulos from "./data/capitulos.js";
import recuerdos from "./data/recuerdos.js";



const modes = {

    night: {
        icon: "💙",
        title: "Algo lindo que te quería decir"
    },

    letters: {
        icon: "✍️",
        title: "Cansada? Enojada? Estresada?"
    },

    book: {
        icon: "💌",
        title: "Cartas jeje"
    },

    memories: {
        icon: "😍",
        title: "Cosas lindas de ti"
    },

    questions: {
        icon: "😸",
        title: "Si algo te da curiosidad de mí"
    },

    random: {
        icon: "👻",
        title: "Nada más"
    },

    love: {
        icon: "❤️",
        title: "Algo que quiero decirte"
    }

};


/* =========================
   ABRIR MODO
========================= */

function openMode(mode) {

    const modal = document.getElementById("modal");

    const icon = document.getElementById("modal-icon");

    const title = document.getElementById("modal-title");

    const body = document.getElementById("modal-body");


    if (!modes[mode]) {
        return;
    }


    /*
        MENSAJE DE LA NOCHE
    */

   if (mode === "night") {

    mostrarMensaje();

}


    /*
        CARTAS
    */

      /*
    OPCIONES DE APOYO
*/

else if (mode === "letters") {

    icon.textContent = "✍️";

    title.textContent = "Cansada? Enojada? Estresada?";

    body.innerHTML = cartas.map(carta => `

        <button
            class="content-option"
            onclick="mostrarCarta('${carta.id}')"
        >
            ${carta.titulo}
        </button>

    `).join("");

}

    
    /*
    CARTAS JEJE
*/

else if (mode === "book") {

    icon.textContent = "💌";
    title.textContent = "Cartas jeje";

    // Fecha actual en formato AAAA-MM-DD, usando la hora local
    const ahora = new Date();

    const hoy =
        ahora.getFullYear() + "-" +
        String(ahora.getMonth() + 1).padStart(2, "0") + "-" +
        String(ahora.getDate()).padStart(2, "0");

    body.innerHTML = capitulos.map(capitulo => {

        // Si tiene fecha, se desbloquea al llegar ese día.
        // Si no tiene fecha, se respeta su estado inicial.
        const disponible = capitulo.fechaDesbloqueo
            ? hoy >= capitulo.fechaDesbloqueo
            : capitulo.desbloqueado;

        const fechaVisible = capitulo.fechaDesbloqueo
            ? new Date(capitulo.fechaDesbloqueo + "T12:00:00")
                .toLocaleDateString("es-GT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })
            : null;

        if (disponible) {

            return `
                <button
                    class="content-option"
                    onclick="mostrarCapitulo(${capitulo.numero})"
                >
                    💌 ${capitulo.titulo}
                    <br>
                    <small>
                        ${fechaVisible
                            ? "Disponible desde el " + fechaVisible
                            : "Disponible desde el inicio"}
                    </small>
                </button>
            `;

        }

        return `
            <div class="content-option locked">
                🔒 ${capitulo.titulo}
                <br>
                <small>Se desbloquea el ${fechaVisible}</small>
            </div>
        `;

    }).join("");

}


    /*
    RECUERDOS
*/


else if (mode === "memories") {
    icon.textContent = "😍";
    title.textContent = "Cosas lindas de ti";

    body.innerHTML = `
        <p class="section-intro">
            Hay muchas cositas tuyas que me encantan.
            Pulsa una tarjeta para descubrir por qué. 💗
        </p>

        <div class="memory-grid">
            ${recuerdos.map((recuerdo, index) => `
                <button
                    class="memory-card"
                    onclick="mostrarRecuerdo(${index})"
                >
                    <span class="memory-card-icon">💗</span>
                    <span class="memory-card-title">${recuerdo.titulo}</span>
                    <span class="memory-card-hint">Pulsa para leer ✨</span>
                </button>
            `).join("")}
        </div>
    `;
}



    /*
        PREGUNTAS
    */

  /*
    PREGUNTAS
*/


else if (mode === "questions") {
    mostrarListaHistoria();
}



    /*
        RANDOM
    */

    else if (mode === "random") {

        icon.textContent = "👻";

        title.textContent = "Nada más";

        body.innerHTML = `

            <p>
                Llegaste a la sección de cosas que probablemente
                no necesitaban existir 😂
            </p>

            <br>

            <p>
                Pero aquí estás.
            </p>

        `;

    }


    

/*
    ALGO QUE QUIERO DECIRTE
*/

else if (mode === "love") {

    icon.textContent = "❤️";

    title.textContent = "Algo que quiero decirte";

    body.innerHTML = amor.map(nota => `
        <button
            class="content-option"
            onclick="mostrarNota('${nota.id}')"
        >
            ❤️ ${nota.titulo}
        </button>
    `).join("");

}
modal.classList.add("active");

}


/* =========================
   COSAS LINDAS DE TI
========================= */

function mostrarRecuerdo(index) {
    const recuerdo = recuerdos[index];

    if (!recuerdo) return;

    document.getElementById("modal-icon").textContent = "💗";
    document.getElementById("modal-title").textContent = recuerdo.titulo;

    document.getElementById("modal-body").innerHTML = `
        <div class="memory-detail">
            <div class="memory-detail-icon">💖</div>

            <p>${recuerdo.texto}</p>

            <button
                class="content-option"
                onclick="openMode('memories')"
            >
                ← Volver a las tarjetas
            </button>
        </div>
    `;
}


/* =========================
   MI HISTORIA POR CAPÍTULOS
========================= */

function mostrarListaHistoria() {
    const icon = document.getElementById("modal-icon");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    icon.textContent = "😸";
    title.textContent = "Si algo te da curiosidad de mí";

    body.innerHTML = `
        <p class="section-intro">
            Hay cosas de mí que quiero contarte poco a poco.
            Elige el capítulo que quieras leer. 💙
        </p>

        <div class="story-chapter-list">
            ${preguntas.map((capitulo, index) => `
                <button
                    class="story-chapter-option"
                    onclick="mostrarHistoria(${index})"
                >
                    <span class="story-chapter-number">
                        Capítulo ${index + 1}
                    </span>

                    <span class="story-chapter-title">
                        ${capitulo.titulo}
                    </span>

                    <span class="story-chapter-subtitle">
                        ${capitulo.subtitulo}
                    </span>

                    <span class="story-chapter-arrow">→</span>
                </button>
            `).join("")}
        </div>
    `;
}


function mostrarHistoria(index) {
    const capitulo = preguntas[index];

    if (!capitulo) return;

    const icon = document.getElementById("modal-icon");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    icon.textContent = "📖";
    title.textContent = capitulo.titulo;

    const parrafos = capitulo.parrafos
        .map(parrafo => `<p class="story-paragraph">${parrafo}</p>`)
        .join("");

    body.innerHTML = `
        <article class="story-reading">

            <div class="story-chapter-label">
                Capítulo ${index + 1} de ${preguntas.length}
            </div>

            <h3 class="story-subtitle">
                ${capitulo.subtitulo}
            </h3>

            <div class="story-paragraphs">
                ${parrafos}
            </div>

            <button
                class="content-option story-back-button"
                onclick="mostrarListaHistoria()"
            >
                ☰ Volver a los capítulos
            </button>

            <div class="story-navigation">

                <button
                    class="story-nav-button"
                    onclick="mostrarHistoria(${index - 1})"
                    ${index === 0 ? "disabled" : ""}
                >
                    ← Anterior
                </button>

                <button
                    class="story-nav-button"
                    onclick="mostrarHistoria(${index + 1})"
                    ${index === preguntas.length - 1 ? "disabled" : ""}
                >
                    Siguiente →
                </button>

            </div>

        </article>
    `;
}


/* =========================
   MOSTRAR MENSAJE
========================= */

let ultimoMensaje = null;

function mostrarMensaje() {

    const ahora = new Date();

    const hoy =
        ahora.getFullYear() + "-" +
        String(ahora.getMonth() + 1).padStart(2, "0") + "-" +
        String(ahora.getDate()).padStart(2, "0");

    // Buscar mensajes especiales para hoy
    const especialesDeHoy = mensajes.filter(mensaje =>
        mensaje.tipo === "especial" &&
        mensaje.fecha === hoy
    );

    // Si hay especiales, tienen prioridad
    const disponibles = especialesDeHoy.length > 0
        ? especialesDeHoy
        : mensajes.filter(mensaje =>
            !mensaje.tipo || mensaje.tipo === "normal"
        );

    if (disponibles.length === 0) {
        return;
    }

    let mensaje;

    if (disponibles.length === 1) {
        mensaje = disponibles[0];
    } else {
        do {
            mensaje =
                disponibles[
                    Math.floor(Math.random() * disponibles.length)
                ];
        } while (mensaje === ultimoMensaje);
    }

    ultimoMensaje = mensaje;

    document.getElementById("modal-icon").textContent = "💙";

    document.getElementById("modal-title").textContent =
        mensaje.titulo;

    document.getElementById("modal-body").innerHTML = `

        <p>${mensaje.texto}</p>

        <br>

        <button
            class="content-option"
            onclick="mostrarMensaje()"
        >
            💙 Dime otra cosa
        </button>

    `;
}

/* =========================
   MENSAJE DE HOY
========================= */

function obtenerMensajeDeHoy() {

    const hoy = new Date();

    const fecha =
        hoy.getFullYear() +
        "-" +
        String(hoy.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(hoy.getDate()).padStart(2, "0");


    const encontrado =
        mensajes.find(mensaje => mensaje.fecha === fecha);


    if (encontrado) {
        return encontrado;
    }


    return {
        titulo: "Todavía no hay mensaje 🌙",

        texto:
            "Parece que hoy todavía no dejé nada nuevo por aquí. 👀"
    };

}


/* =========================
MOSTRAR CAPÍTULO
========================= */

function mostrarCapitulo(numero) {

const capitulo = capitulos.find(
    capitulo => capitulo.numero === Number(numero)
);

if (!capitulo) {
    return;
}

const ahora = new Date();

const hoy =
    ahora.getFullYear() + "-" +
    String(ahora.getMonth() + 1).padStart(2, "0") + "-" +
    String(ahora.getDate()).padStart(2, "0");

const disponible = capitulo.fechaDesbloqueo
    ? hoy >= capitulo.fechaDesbloqueo
    : capitulo.desbloqueado;

if (!disponible) {
    return;
}

document.getElementById("modal-icon").textContent = "💌";

document.getElementById("modal-title").textContent =
    capitulo.titulo;

document.getElementById("modal-body").innerHTML = `
    <p>${capitulo.texto || "Este capítulo todavía está esperando su versión definitiva. 💙"}</p>

    <br>

    <button
        class="content-option"
        onclick="openMode('book')"
    >
        ← Volver a las cartas
    </button>
`;

}



/* =========================
   MOSTRAR CARTA
========================= */

function mostrarCarta(id) {

    const carta = cartas.find(
        carta => String(carta.id) === String(id)
    );

    if (!carta) {
        return;
    }

    document.getElementById("modal-icon").textContent = "💌";

    document.getElementById("modal-title").textContent =
        carta.titulo;

    document.getElementById("modal-body").innerHTML = `
        <p>${carta.texto}</p>

        <br>

        <button
            class="content-option"
            onclick="openMode('letters')"
        >
            ← Volver
        </button>
    `;
}


/* =========================
   MOSTRAR NOTA PERSONAL
========================= */

function mostrarNota(id) {

    const nota = amor.find(nota => nota.id === id);

    if (!nota) {
        return;
    }

    document.getElementById("modal-icon").textContent = "❤️";

    document.getElementById("modal-title").textContent =
        nota.titulo;

    document.getElementById("modal-body").innerHTML = `

        <p>${nota.texto}</p>

        <br>

        <button
            class="content-option"
            onclick="openMode('love')"
        >
            ← Volver a las notas
        </button>

    `;
}


/* =========================
   CERRAR
========================= */

function closeMode() {

    document
        .getElementById("modal")
        .classList.remove("active");

}


/* =========================
   CERRAR AL TOCAR FUERA
========================= */

document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeMode();
        }

    });


/* =========================
   CERRAR CON ESC
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeMode();
    }

});


/* =========================
   HACER FUNCIONES ACCESIBLES
========================= */

window.openMode = openMode;

window.closeMode = closeMode;

window.mostrarCarta = mostrarCarta;

window.mostrarCapitulo = mostrarCapitulo;

window.mostrarMensaje = mostrarMensaje;

window.mostrarNota = mostrarNota;

window.mostrarRecuerdo = mostrarRecuerdo;

window.mostrarHistoria = mostrarHistoria;

window.mostrarListaHistoria = mostrarListaHistoria;


/* =========================
   MENSAJE DE BIENVENIDA
========================= */



const welcomeScreen = document.getElementById("welcome-screen");
const welcomeClose = document.getElementById("welcome-close");

if (welcomeScreen && welcomeClose) {

    // Cerrar la bienvenida y mostrar la app
    welcomeClose.addEventListener("click", function () {
        welcomeScreen.style.display = "none";
    });

}

/* =========================
   TEXTOS DE LOS SECRETOS
========================= */

const secretTexts = {
    greeting: "Xd te amoooooooo y duerme yaa que también tienes que descansar amoor. 💙",
    star1: "Xd espera y verás. ✨",
    star2: "Xd 2, no esperes nada. 🌌",
    star3: "Xd 3, decide que decir o nada. 💙",
    moon: "Duerme duerme duerme cachetona jeje. 🌙",
    titleSparkle: "Six Seven jajajajajajajajjaja. ✦",
    footerMessage: "Te amo mucho amoor, enserio pienso que mereces todo esto y mucho más, yo sé que por la distancia algunas cosas son difíciles, pero pues aunque nuestra relación sea 7 veces más complicada, juntos podemos hacer que sea 7 veces más fuerte y hermosa, hago todo esto porque sé que lo mereces, mereces una vida increíble y te prometo que te la haré realidad aunque cueste, sabes que me da miedo perderte pero confío en tí y sé que juntos podemos hacer lo que sea, te amo mucho amoor, ojalá ya pronto nos casemos jeje, te adoro Catalina xd, toda tierna y hermosa, y chichona también xd. 💌",
    footerDetail: "Esto no es el final, aún hay muchos más proyectos y regalos que quiero darte jeje, sé que pues toca esperar y no eres muy buena en eso jajaja pero creéme que valdrá la pena esperar, algunas son en fechas especiales y otros simplemente llegarán de sorpresa, te amo Gabyyyyyy. ✧",
    menuHeart: "Ahhhh el corazón azul, ya sabes que significa para mí, lo eres todo para mí y espero poder ser lo mejor para tí, cada día mejoro y no pararé de mejorar hasta que seas muy muy feliz y haga realidad tu vida soñada, eres lo mejor amoor, te amo mucho mucho muchísimo más de lo que crees jeje. 💙",
    chatHeart: "Hice este chat porque sé que a veces te sientes mal y quieres dejar todo, desaparecer y no hablar con nadie; yo también me he sentido muy mal y sé lo doloroso que puede ser todo a veces, usa el chat cuando te quieras desahogar, si no quieres hablar del tema del que te desahogues solo dímelo, pero aún así haré lo que sea para ayudarte y hacer que te sientas mejor, eres lo mejor de mi vida y no pienso dejar que algo te haga sentir mal, eres increíble, eres maravillosa y nada cambiaría eso amoor, te adoro Gabyyyyy. ♡"
};

/* =========================
   TÍTULOS DE LOS SECRETOS
========================= */

const secretTitles = {
    greeting: "Hola hola hola xd 💙",
    star1: "Depende de qué encuentres ✨",
    star2: "Y como lo unas 🌌",
    star3: "Te daré una sopresa jeje 💙",
    moon: "Te amooo dormilona 🌙",
    titleSparkle: "6+7? ✦",
    footerMessage: "Algo tan especial como tú 💌",
    footerDetail: "Jejeje te adoro mucho y ya",
    menuHeart: "Lo más bello de mi vida 💙",
    chatHeart: "No te guardes las cosas, siempre es peor que expresar lo que sientes ♡"
};

/* =========================
   MOSTRAR UN SECRETO
========================= */

function mostrarSecreto(clave) {
    const modal = document.getElementById("modal");
    const icon = document.getElementById("modal-icon");
    const title = document.getElementById("modal-title");
    const body = document.getElementById("modal-body");

    if (!modal || !icon || !title || !body) {
        console.error("No se encontraron los elementos del modal.");
        return;
    }

    const texto = secretTexts[clave];

    if (!texto) {
        console.warn("No existe el secreto:", clave);
        return;
    }

    icon.textContent = "✦";
title.textContent = secretTitles[clave] || "Un pequeño secreto para ti 💙";

    body.innerHTML = "";

    const mensaje = document.createElement("p");
    mensaje.textContent = texto;

    const botonVolver = document.createElement("button");
    botonVolver.type = "button";
    botonVolver.className = "content-option";
    botonVolver.textContent = "Volver 💙";
    botonVolver.addEventListener("click", closeMode);

    body.appendChild(mensaje);
    body.appendChild(botonVolver);

    modal.classList.add("active");
}


/* =========================
   CONECTAR LOS BOTONES
========================= */

const botonesSecretos = {
    "secret-greeting": "greeting",
    "secret-star-1": "star1",
    "secret-star-2": "star2",
    "secret-star-3": "star3",
    "secret-moon": "moon",
    "secret-title-sparkle": "titleSparkle",
    "secret-footer-message": "footerMessage",
    "secret-footer-detail": "footerDetail",
    "secret-menu-heart": "menuHeart",
    "secret-chat-heart": "chatHeart"
};

Object.entries(botonesSecretos).forEach(([id, clave]) => {
    const boton = document.getElementById(id);

    if (!boton) {
        console.warn("No se encontró el botón secreto:", id);
        return;
    }

    boton.addEventListener("click", () => {
        mostrarSecreto(clave);
    });
});


/* =========================
   HACER LA FUNCIÓN ACCESIBLE
========================= */

window.mostrarSecreto = mostrarSecreto;