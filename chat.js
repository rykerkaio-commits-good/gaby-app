
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
    getDatabase,
    ref,
    push,
    query,
    orderByChild,
    onValue
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";


/* =========================
   CONFIGURACIÓN DE FIREBASE
========================= */

const firebaseConfig = {
    apiKey: "AIzaSyDa3cewy45Wcgkfn7vWLX6dMVwla2OBWLY",
    authDomain: "chatgabyyyo.firebaseapp.com",
    databaseURL: "https://chatgabyyyo-default-rtdb.firebaseio.com",
    projectId: "chatgabyyyo",
    storageBucket: "chatgabyyyo.firebasestorage.app",
    messagingSenderId: "882101296491",
    appId: "1:882101296491:web:02897718f98aed26cfc02e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


/* =========================
   ELEMENTOS DEL CHAT
========================= */

const estado = document.getElementById("chat-estado");
const nombreInput = document.getElementById("chat-nombre");
const guardarNombreBtn = document.getElementById("chat-guardar-nombre");
const mensajesContenedor = document.getElementById("chat-mensajes");
const formulario = document.getElementById("chat-formulario");
const textoInput = document.getElementById("chat-texto");
const enviarBtn = document.getElementById("chat-enviar");

let usuarioActual = null;
let escuchandoMensajes = false;


/* =========================
   NOMBRE PERSONALIZADO
========================= */

nombreInput.value = localStorage.getItem("chatNombre") || "";

guardarNombreBtn.addEventListener("click", () => {
    const nombre = nombreInput.value.trim();

    if (!nombre) {
        alert("Escribe el nombre que quieres utilizar.");
        return;
    }

    localStorage.setItem("chatNombre", nombre);
    nombreInput.value = nombre;

    estado.textContent = "Nombre guardado 💙";
});


/* =========================
   MOSTRAR MENSAJES
========================= */

function mostrarMensajes(datos) {
    mensajesContenedor.replaceChildren();

    if (!datos) {
        const vacio = document.createElement("p");
        vacio.className = "chat-vacio";
        vacio.textContent = "Todavía no hay mensajes. ¡Escribe el primero! 💙";
        mensajesContenedor.appendChild(vacio);
        return;
    }

    const mensajes = Object.entries(datos)
        .map(([id, mensaje]) => ({ id, ...mensaje }))
        .sort((a, b) => a.timestamp - b.timestamp);

    for (const mensaje of mensajes) {
        if (
            typeof mensaje.text !== "string" ||
            typeof mensaje.sender !== "string" ||
            typeof mensaje.timestamp !== "number"
        ) {
            continue;
        }

        const burbuja = document.createElement("article");
        burbuja.className = "chat-mensaje";

        if (usuarioActual && mensaje.uid === usuarioActual.uid) {
            burbuja.classList.add("chat-mio");
        }

        const cabecera = document.createElement("div");
        cabecera.className = "chat-mensaje-cabecera";

        const autor = document.createElement("strong");
        autor.textContent = mensaje.sender;

        const hora = document.createElement("time");
        const fecha = new Date(mensaje.timestamp);

        hora.dateTime = fecha.toISOString();
        hora.textContent = fecha.toLocaleString("es", {
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        });

        const contenido = document.createElement("p");
        contenido.className = "chat-mensaje-texto";
        contenido.textContent = mensaje.text;

        cabecera.append(autor, hora);
        burbuja.append(cabecera, contenido);
        mensajesContenedor.appendChild(burbuja);
    }

    mensajesContenedor.scrollTop = mensajesContenedor.scrollHeight;
}


/* =========================
   ESCUCHAR EL HISTORIAL
========================= */

function escucharMensajes() {
    if (escuchandoMensajes) return;

    escuchandoMensajes = true;

    const mensajesRef = query(
        ref(database, "messages"),
        orderByChild("timestamp")
    );

    onValue(
        mensajesRef,
        (snapshot) => {
            mostrarMensajes(snapshot.val());
            estado.textContent = "Chat conectado 💙";
        },
        (error) => {
            console.error("Error leyendo los mensajes:", error);
            estado.textContent =
                "No se pudieron cargar los mensajes. Revisa las reglas de Firebase.";
        }
    );
}


/* =========================
   ENVIAR MENSAJES
========================= */

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    if (!usuarioActual) {
        estado.textContent = "Espera a que se conecte el chat.";
        return;
    }

    const nombre = localStorage.getItem("chatNombre") || "";
    const texto = textoInput.value.trim();

    if (!nombre) {
        estado.textContent = "Primero guarda tu nombre o apodo.";
        nombreInput.focus();
        return;
    }

    if (!texto || texto.length > 2000) return;

    enviarBtn.disabled = true;

    try {
        await push(ref(database, "messages"), {
            text: texto,
            sender: nombre,
            uid: usuarioActual.uid,
            timestamp: Date.now()
        });

        textoInput.value = "";
        textoInput.focus();
        estado.textContent = "Mensaje enviado 💙";

    } catch (error) {
        console.error("Error enviando el mensaje:", error);
        estado.textContent =
            "No se pudo enviar. Revisa la conexión y las reglas de Firebase.";
    } finally {
        enviarBtn.disabled = false;
    }
});


/* =========================
   CONECTAR EL CHAT
========================= */

async function prepararChat() {
    try {
        estado.textContent = "Conectando con Firebase...";

        const resultado = await signInAnonymously(auth);
        usuarioActual = resultado.user;

        console.log("Sesión iniciada:", usuarioActual.uid);

        escucharMensajes();

    } catch (error) {
        console.error("Error al conectar con Firebase:", error);
        console.error("Código:", error.code);

        estado.textContent =
            "No se pudo conectar. Revisa Firebase Authentication y la consola.";
    }
}

prepararChat();
