/**
 * [
 *  la funsion con la pagina el incio al juego despues de play 
 *  se muestra  una pagina con LOS ELEMENTOS DE LA ALERTA DE INICIO
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
function AlertIncio() {

    const numero = document.createElement('h2');
    const num = [3, 2, 1];
    for (let i = 0; i <= 3; i++) {
        setTimeout(() => {
            if (i === 3) {
                numero.innerHTML = 'VAMOS A JUGAR!';
            } else {
                numero.innerHTML = num[i];
            }
        }, 500 * i + 1);
    }

    numero.classList.add('numero');

    //CONTENEDOR CON LOS ELEMENTOS DE LA ALERTA DE INICIO
    const containerAlert = document.createElement('div');
    containerAlert.classList.add('container__alert');
    containerAlert.id = 'containerAlert';
    containerAlert.append(numero)


    return containerAlert;
}

export { AlertIncio };