let datos = ramdonNumbers(data);

//Elementos del DOM donde se va a renderizar el juego
const app = document.getElementById('container');
app.append(Home());

//Boton de se agarran del DOM
const buttonPlay = document.getElementById('buttonPlay');
const containerHome = document.getElementById('containerHome');

//Variables que cambian su valor a lo largo del juego 
let puntaje = 0; //Respuestas correctas del juego
let contador = 0; //Contador de preguntas para saber que pregunta se esta mostrando
const segundos = 100 / 30; //Tiempo de juego en segundos
let intervalo; //intervalo de tiempo para el juego
let width = 0; //width que cambia de tamaño que se va a mostrar en la barra de tiempo