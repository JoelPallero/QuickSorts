

function quickSort(datos){

    if(datos.length <= 1){
        return datos;
    }

    let izquierda = [];
    let derecha = [];
    let auxiliar = [];

    //pivote va a ser el ultimo elemento
    let pivote = datos.pop();

    let n = datos.length;    


    for (let i = 0; i < n; i++){
        // la comparacion la ahcemos con el pivote
        // si es mayor o menor, se va a ir a un array a la derecha o a la izquierda
        if(datos[i] <= pivote){
            izquierda.push(datos[i]);
        }else{
            derecha.push(datos[i]);
        }
    }

    // Al final concatenamos el array de la izquierda y de la derecha y ponemos el pivote en el medio
    return auxiliar.concat(quickSort(izquierda), pivote, quickSort(derecha));
}

let primos = [19, 13, 2, 11, 7, 5, 23, 17, 33];

console.log(primos);

console.log();

let resultado = quickSort(primos);

console.log(resultado);

[2, 5, 7, 11, 13, 17, 19, 23];


