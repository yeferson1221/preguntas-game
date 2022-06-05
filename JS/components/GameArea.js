import { respuestaCorrectaTime, respuestaIncorrectaTime, CambiarPregunta, } from '../index.js';
import { AnswerCorrect } from './AnswerCorrect.js';
import { AnswerWrong } from './AnswerWrong.js';
import { TimeBar } from './TimeBar.js';


//Variables globales
let yaEligio = false; //Verifca si la persona ya eligio una respuesta
let contador = 0; //Contenedor de preguntas 
const container = document.getElementById('container'); //Elementos del DOM

/**
 * [
 *  Contenedor de las opciones de respuesta,Ciclo for para crear las opciones de respuesta,
 *  Texto de las opciones de respuesta
 *  Creacion de los botones de respuesta
 *  Evento click para las opciones de respuesta
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */

function GameArea(data) {

    const optionAnswers = document.createElement('div');
    optionAnswers.classList.add('options__container');

    const letras = ['A) ', 'B) ', 'C) ', 'D) '];

    for (let i = 0; i <= 3; i++) {


        const textLetter = document.createElement('h3');
        textLetter.classList.add('letter__option');
        textLetter.textContent = letras[i];


        const textOption = document.createElement('p');
        textOption.classList.add('text__option');
        textOption.textContent = data[0].opciones[i];
        textOption.id = `option${i+1}`


        const option = document.createElement('button');
        option.classList.add("options__container--iteam");

        option.addEventListener('click', () => {

            if (!yaEligio) {
                yaEligio = true;

                if (textOption.textContent === data[contador].respuesta) {
                    option.classList.add('respuesta__seleccionada');

                    respuestaCorrectaTime();

                    setTimeout(() => {
                        let audio = document.getElementById('check');
                        audio.volume = 0.2;
                        audio.play();
                        container.appendChild(AnswerCorrect());
                    }, 500);

                    setTimeout(() => {
                        container.removeChild(container.lastChild);
                        option.classList.remove('respuesta__seleccionada');
                        yaEligio = false;
                        contador++;
                        CambiarPregunta();
                    }, 1500);
                } else {
                    option.classList.add('respuesta__seleccionada');

                    respuestaIncorrectaTime();

                    setTimeout(() => {
                        let audio = document.getElementById('error');
                        audio.volume = 0.2;
                        audio.play();
                        container.appendChild(AnswerWrong());
                    }, 500);

                    setTimeout(() => {
                        container.removeChild(container.lastChild);
                        option.classList.remove('respuesta__seleccionada');
                        yaEligio = false;
                        contador++;
                        CambiarPregunta();
                    }, 1500);
                }
            }
        })
        option.append(textLetter, textOption);

        optionAnswers.append(option);
    }


    const timeBar = TimeBar();



    const pregunta = document.createElement('h2')
    pregunta.classList.add('pregunta__text');
    pregunta.textContent = data[0].pregunta;
    pregunta.id = 'pregunta';


    const image = document.createElement('img');
    image.classList.add('image__question');
    image.src = data[0].image;
    image.id = 'image';

    const imagePreload = document.createElement('img');
    imagePreload.classList.add('image__preload');
    imagePreload.src = data[1].image;
    imagePreload.id = 'imagePreload';




    const containerSuperior = document.createElement('div');
    containerSuperior.classList.add('container__superior');
    containerSuperior.append(timeBar, pregunta, image, imagePreload);


    const gameAreaContainer = document.createElement('div');
    gameAreaContainer.classList.add('game__area--container');
    gameAreaContainer.id = 'gameArea';
    gameAreaContainer.append(containerSuperior, optionAnswers);

    return gameAreaContainer;
}

export { GameArea };