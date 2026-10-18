
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
    getAuth,
    signInAnonymously
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

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

async function prepararChat() {
    const estado = document.getElementById("chat-estado");
    const identificador = document.getElementById("chat-uid");

    try {
        estado.textContent = "Conectando con Firebase...";

        const resultado = await signInAnonymously(auth);

        identificador.textContent = resultado.user.uid;
        estado.textContent =
            "Conexión inicial correcta. Guarda tu identificador para configurar los permisos.";

        console.log("Identificador de este navegador:", resultado.user.uid);
    } catch (error) {
        console.error("Error al conectar con Firebase:", error);
        estado.textContent =
            "No se pudo conectar. Revisa la configuración de Firebase.";
    }
}

prepararChat();
