/**
 * [
 *  contiene la funsion para crear listado de preguntas randon que tiene como resultado 
 *  una nueva lista  la cual retornamos para un uso posterior.
 *
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com]
 */
const ramdonNumbers = (list) => {

    let elements = list.length;
    let newList = [];

    for (let i = 0; i < elements; i++) {
        const ramdon = Math.floor(Math.random() * list.length);
        newList.push(list[ramdon]);
        list.splice(ramdon, 1);
    }

    return newList;
}

export { ramdonNumbers };