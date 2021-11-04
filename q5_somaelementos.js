const input = require('prompt-sync')()

// Entrada
const n = Number(input('Digite um numero com 3 digitos: '))

// Processamento
cent = n/100
r1 = n%100
dez = r/10
uni = r%10
rtot = cent + dez + uni

// Saída
console.log('A soma de seus elementos vale: ', rtot)