/**
 * [
 *  contiene el funsion que muestra todo el home la pagina de inicio de juego
 *  titulo
 *  boton jugar
 *  boton de puntaje
 *  secion de sonido
 *  contenedor con elementos home
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
function Home() {

    //TITULO
    const titulo = document.createElement('h1');
    titulo.classList.add('title');
    titulo.textContent = 'JUEGOS DE YEFER';
    const tituloContainer = document.createElement('div');
    tituloContainer.classList.add('home__titulo-container');
    tituloContainer.append(titulo);



    const texto = document.createElement('h3');
    texto.textContent = 'JUGAR YA';
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = `<svg height="30" width="30"><polygon points="5,0 5,30 25,15" fill="white"/></svg>`
    const buttonPlay = document.createElement('button');
    buttonPlay.classList.add('home__container--button');
    buttonPlay.id = 'buttonPlay';
    buttonPlay.append(texto, svgContainer);



    const texto1 = document.createElement('h3');
    texto1.textContent = 'SCORE';
    const buttonPlay1 = document.createElement('button');
    buttonPlay1.classList.add('home__container--button');
    buttonPlay1.id = 'buttonPlay1';
    buttonPlay1.append(texto1);




    const buttonSound = document.createElement('button');
    const soundContainer = document.createElement('div');
    soundContainer.classList.add('home__container--sound');
    soundContainer.append(buttonSound);



    const containerHome = document.createElement('div');
    containerHome.classList.add('container__home');
    containerHome.id = 'containerHome';
    containerHome.append(tituloContainer, buttonPlay, buttonPlay1, soundContainer);

    return containerHome;

}

export { Home }