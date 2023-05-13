/**
 * Obtener el valor de la carta
 * @param {String} carta El valor es un string
 * @returns {Number} Retorna el número de la carta
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length -1);
    return ( isNaN( valor ) )   ?
            ( valor === 'A' )   ? 11 : 10
            : valor * 1;
    // return (!isNaN(valor)) ? valor : valor === 'A' ? 11 : 10;  Función mia 
}