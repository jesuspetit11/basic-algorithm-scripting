function largestOfFour(arr){
    let results = []; //Asignamos un array vacio
    for (let i = 0; i < arr.length; i++) { //Loop para recorrer el array de arrays
        let largestNumber = arr[i][0];  //Asignamos el número mas grande al primero
        for (let j = 1; j < arr[i].length; j++){ //Recorremos los otros arrays
            if(arr[i][j] > largestNumber){  //Si el número en el arrays de arrays es mayor al primero
                largestNumber = arr[i][j];  //Entonces asignamos ese número mas grande como largestNumber
            }
        }
        results[i] = largestNumber; //Asignamos los numeros a results
    }
    return results; //Regresamos results
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));