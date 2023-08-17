"use strict";
let numero = 200;
let SegundoNumero = 100;
console.log(numero + SegundoNumero);
let texto = "minha idade é:";
let idade = 16;
console.log(texto + idade);
let idadeNova = 16;
let textoNova = "minha idade é:" + idadeNova;
console.log(texto + idade);
let verdadeiro = true;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
console.log("tamanhodo array:" + arr.length);
console.log("acessando a posição do array: " + arr[5]);
console.log(arr.indexOf(5));
let arrTexto;
arrTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrTexto);
console.log(arrTexto.length);
console.log(arrTexto.indexOf('cd'));
function exibirTexto() {
    console.log('Exerbir meu Texto');
}
exibirTexto();
function exibirOutroText() {
    return "exibindo outro texto";
}
console.log(exibirOutroText());
function retornaNumero() {
    return 16;
}
console.log(retornaNumero());
function retornarTexto() {
    return "retornar string";
}
console.log(retornarTexto());
function soma(a, b) {
    return a + b;
}
console.log("o valor da soma é:" + soma(50, 100));
//exercicios
function multiplicar(a, b) {
    return a * b;
}
console.log("o valor da multiplicação é:" + multiplicar(50, 100));
function conta(a, b, c) {
    return (a + b) * c;
}
console.log("o valor da conta é:" + conta(50, 100, 2));
function resultado(numero1, numero2) {
    return (numero1 * numero2);
}
console.log("resultado da mutiplicação é:" + (10 * 20));
