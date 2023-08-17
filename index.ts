let numero: number= 200;
let SegundoNumero: number = 100;

console.log(numero+SegundoNumero)

let texto: string = "minha idade é:";
let idade: number = 16;
console.log(texto + idade);

let idadeNova: number = 16;
let textoNova: string = "minha idade é:" + idadeNova;
console.log(texto + idade);

let verdadeiro: boolean = true;
console.log(verdadeiro);

let arr: Number[] = [1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log("tamanhodo array:" + arr.length);
console.log("acessando a posição do array: "+ arr [5]);
console.log(arr.indexOf(5));
let arrTexto:Array<string>;
arrTexto=['ab', 'bc' , 'cd', 'de']
console.log(arrTexto);
console.log(arrTexto.length);
console.log(arrTexto.indexOf('cd'));

function exibirTexto(){
    console.log('Exerbir meu Texto');
    
}
exibirTexto();

function exibirOutroText(){
    return "exibindo outro texto"
}

   console.log(exibirOutroText());

   function retornaNumero(): number{
    return 16;
   }
   console.log(retornaNumero());
   
   function retornarTexto(): string{

    return "retornar string"
   }

   console.log(retornarTexto());

   function soma(a: Number, b: Number){
return   ;
}
   console.log("o valor da soma é:" + soma(50, 100));



   //exercicios
   function multiplicar(a: Number, b: Number){
    return   ;
    }
       console.log("o valor da multiplicação é:" + multiplicar(50, 100));

       function conta(a: Number, b: Number, c: Number){
        return   ;
        }
           console.log("o valor da conta é:" + conta(50, 100, 2));

           function resultado(numero1:string, numero2:string){
            return  

           }
           console.log("resultado da mutiplicação é:" + (10 *20));
           
   
   