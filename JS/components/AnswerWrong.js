/**
 * [
 *  la funsion la pregunta incorrecta
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
const AnswerWrong = () => {

    const texto = document.createElement('p');
    texto.textContent = 'X';

    const alert = document.createElement('div');
    alert.classList.add('answer-incorrect');
    alert.append(texto);

    const containerAlert = document.createElement('div');
    containerAlert.classList.add('container__alert--answer-incorrect');
    containerAlert.id = 'containerAlert';
    containerAlert.append(alert);


    return containerAlert;
}

export { AnswerWrong };