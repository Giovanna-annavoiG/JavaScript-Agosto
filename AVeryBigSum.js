'use strict'; /*Aticação do modo*/

const fs = require('fs'); /*File system*/

process.stdin.resume(); /*Entrada do usuario*/
process.stdin.setEncoding('utf-8'); /*Modo texto*/

let inputString = ''; /*Armazenamento*/
let currentLine = 0; /* Controle*/

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main(); /*vai processar os dados*/
});

function readLine() {
    return inputString[currentLine++]; /* permite ler a entrada linha por linha*/
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) { /*Recebe um array*/
    
     let soma = 0; /*Inicia em 0*/
    
     for (let i = 0; i < ar.length; i++){ /*Percorre todos os elementos do array*/
        soma = soma + ar[i];
    }
    
    return soma; /*Resultado da soma*/
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
