/**
 * [
 *  la funsion la pregunta correcta
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
const AnswerCorrect = () => {

    const texto = document.createElement('p');
    texto.textContent = ' ✓';

    const alert = document.createElement('div');
    alert.classList.add('answer-correct');
    alert.append(texto);

    const containerAlert = document.createElement('div');
    containerAlert.classList.add('container__alert--answer-correct');
    containerAlert.append(alert);


    return containerAlert;
}

export { AnswerCorrect };