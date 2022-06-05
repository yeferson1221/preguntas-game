import { Home } from "./components/Home.js";
import { AlertIncio } from './components/AlertInicio.js';
import { GameArea } from "./components/GameArea.js";
import { GameOver } from "./components/GameOver.js";
import { ramdonNumbers } from './utils/ramdonNumbers.js';
import { data } from './data/questions.js';
import { Score } from "./components/Score.js";
import { localStorage } from './utils/localStorage.js';
import { NewRecord } from './components/NewRecord.js';

/**
 * [
 *   El index, js  importa casi tdoos los modulos , adicional carga el modulo Home,
 *   Paso los datos para que se ordenen aleatoriamente,
 *   Elementos del DOM donde se va a renderizar el juego
 *   Boton de se agarran del DOM
 *   Variables que cambian su valor a lo largo del juego 
 *  
 * ]
 * @version [1,0.0]
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 * @since [1,0,0]
 *
 */


let datos = ramdonNumbers(data);


const container = document.getElementById('container');
container.append(Home());


const buttonPlay = document.getElementById('buttonPlay');
const buttonPlay1 = document.getElementById('buttonPlay1');
const containerHome = document.getElementById('containerHome');


let puntaje = 0; //Respuestas correctas del juego
let contador = 0; //Contador de preguntas para saber que pregunta se esta mostrando
const segundos = 100 / 30; //Tiempo de juego en segundos
let intervalo; //intervalo de tiempo para el juego
let width = 0; //width que cambia de tamaño que se va a mostrar en la barra de tiempo


/**
 * [
 *  Funcion que cambia el la barra de tiempo (width), y los segundos restantes.
 *  tambien Se traen los valores del localStorage,Si el localStorage tiene datos se pone el puntaje mas alto,
 *  Si el puntaje es mayor o igual al recordActual, se muestra el modal de nuevo record para guardarlo y
 *  Si no, se muestra los ultimos record
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
function tiempo() {
    let barra = document.getElementById('barra__tiempo');

    if (width <= 103.3) {
        barra.style.width = `${width}%`;
        width += segundos;
    } else {
        clearInterval(intervalo);
        setTimeout(() => {
            document.getElementById('gameArea').remove();
            if (document.getElementById('containerAlert')) {
                document.getElementById('containerAlert').remove();
            }
        }, 1000);
        container.append(GameOver());
        setTimeout(() => {
            document.getElementById('gameOver').remove();

            const storage = localStorage().get("QuizzGame");

            let recordActual = 1;

            if (storage) {
                recordActual = storage[0].score;
            }

            if (puntaje >= recordActual) {
                container.append(NewRecord(puntaje));
            } else {
                container.append(Score());
            }
        }, 3000);
    }
}

/**
 * [
 *  Evento del boton de play que cambia el estado de la pagina y comienza el juego
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
buttonPlay.addEventListener('click', () => {
    containerHome.remove();
    let audio = document.getElementById('main');
    audio.volume = 0.1;
    audio.play();
    setTimeout(() => {
        container.append(AlertIncio());
        setTimeout(() => {
            document.getElementById('containerAlert').remove();
            container.append(GameArea(datos));
            intervalo = setInterval(tiempo, 1000);
            tiempo();
        }, 6010);
    }, 100);
});

/**
 * [
 *  Evento del boton de Score que cambia el estado de la pagina y nos manda al Puntaje
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
buttonPlay1.addEventListener('click', () => {
    containerHome.remove();
    let audio = document.getElementById('main');
    audio.volume = 0.1;
    audio.play();
    setTimeout(() => {
        container.append(Score());
    }, 100);
});

/**
 * [
 *  Funcion de disminulle el valor del width de la barra de tiempo, ademas
 *  Se aumenta el puntaje porque la respuesta es correcta
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
const respuestaCorrectaTime = () => {
        if (width <= 20) {
            width = 0;
        } else {
            width = width - 20;
        }
        puntaje++;
    }
    /**
     * [
     *  Funcion incrementa el valor del width de la barra de tiempo sumandole un ancho de 10 
     *
     * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
     */
const respuestaIncorrectaTime = () => {
    width = width + 10;
}

/**
 * [
 *  funcion que cambia las preguntas
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
const CambiarPregunta = () => {
    const pregunta = document.getElementById('pregunta');
    const image = document.getElementById('image');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');

    contador++;
    let nuevoOrden = ramdonNumbers(datos[contador].opciones);

    pregunta.textContent = datos[contador].pregunta;
    image.src = datos[contador].image;
    option1.textContent = nuevoOrden[0];
    option2.textContent = nuevoOrden[1];
    option3.textContent = nuevoOrden[2];
    option4.textContent = nuevoOrden[3];
}

/**
 * [
 *  Se exportan  las funsiones respuestaCorrectaTime, respuestaIncorrectaTime, CambiarPregunta, datos 
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
export { respuestaCorrectaTime, respuestaIncorrectaTime, CambiarPregunta, datos };