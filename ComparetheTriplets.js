'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) { /*Recebendo os parametros*/
    let contadorA = 0; //Variaveis
    let contadorB = 0;
    let i = 0;
    
        
    for (i = 0; i < 3; i++){ //Loop de comparação
        if(a[i] > b[i]){
            contadorA = contadorA + 1; //Se valor de A for maior 
        }
        
        if(a[i] < b[i]){
            contadorB = contadorB + 1; //Se o valor de B for maior
        }
    }
    let result = [contadorA, contadorB]; //Resultado
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
