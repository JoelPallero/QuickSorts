let lista = ['b', 'g', 't', 'c', 'e', 'r', 'h', 'u', 'd', 'a', 'q', 'n'];

function Burbuja(datos) {
    
    let n, aux;
    n = datos.length;    
    
    // Algoritmo de burbuja


    // basicamente lo que hace el algoritmo, es agarrar el primer elemento,
    // y lo va colocando en la siguiente posicion a medida que el siguiente elemento sea menor
    // una vez que el siguiente elemento es mayor, entonces se detiene y sigue 
    // de nuevo el mismo proceso con los demas elementos de la lista

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (datos[j] > datos[j + 1]) {
                aux = datos[j];
                datos[j] = datos[j + 1];
                datos[j + 1] = aux;
            }
        }
    }


    // devolvemos la lista ordenada
    return datos;
}

console.log(Burbuja(lista));


// BubbleSort?
