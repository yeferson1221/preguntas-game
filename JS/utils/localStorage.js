/**
 * [
 *  Contiene la funsion localStoras con Funcion que registra un nuevo record
 *  la Data que extrae los valores del localStorage, tambien Se crea un objeto
 *  con los datos que vienen como parametro y Si ya tiene un record, se agrega el nuevo record
 *  se ordena el array de mayor a menor y si no tiene record, se crea un array con el nuevo record
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
const localStorage = () => {
    const storage = window.localStorage;
    const set = (key, value) => storage.setItem(key, JSON.stringify(value));
    const get = (key) => JSON.parse(storage.getItem(key));
    const remove = (key) => storage.removeItem(key);
    const clear = () => storage.clear();
    return {
        set,
        get,
        remove,
        clear,
    };
}


const NewScore = (name, score) => {


    const data = localStorage().get('QuizzGame');


    const objeto = {
        name: name.toUpperCase(),
        score: score,
    };


    if (data) {

        data.push(objeto);

        const newData = data.sort((a, b) => b.score - a.score);

        localStorage().set('QuizzGame', newData);
    } else {

        localStorage().set('QuizzGame', [objeto]);
    }
}

export { localStorage, NewScore };