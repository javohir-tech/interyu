//9.1
//passed by value
// let a =10; 

// function ozgartir(b){
//     b=20;

// }

// ozgartir(a)
// console.log(a)

//9.2
//passed by referens

// let obj = {
//     name:"ali"
// }

// function objOzgartir(newObj){
//     newObj.name = "Vali"
// }

// objOzgartir(obj)
// console.log(obj.name)

// 10 IIFE
// (function(){
//     let a= 10
//     console.log(a)
// })()

// let modul = (function(){
//     let satr = "salom dunyo"

//     return {
//         olish: function(){
//             return satr
//         }
//     }
// })()

// console.log(modul.olish())

//11
// "use strict"
// x=10
// console.log(x)

//12
//12.1.1
// let raqamlar = [1, 2, 3, 4, 5]

// raqamlar.forEach(function(raqam){
//     console.log(raqam)
// })

//12.1.2

// function oddiySalom(ism){
//    return  `salom ${ism}`;
// }

// function rasmiySalom(ism){
//     return `Assalomu alaykum ${ism}`;
// }

// function salommBer(ism,  salomFunction){
//     console.log(salomFunction(ism))
// }

// salommBer("Ali", oddiySalom) // salom , ali
// salommBer("Vali", rasmiySalom)

// //12.1.3


// function chevrolet (marka){
//     return `chevrolet kompaniyasini ${marka} markasini ishlab chiqdi`
// }

// function ford (marka){
//     return `ford kompaniyasini ${marka} markasini ishlab chiqdi`
// }

// function HabarBer(marka, markaFunction){
//     console.log(markaFunction(marka))
// }

// HabarBer("chevrolet", chevrolet)
// HabarBer("ford", ford)

// //12.1. 4

// function qosh(a, b){
//     return a+b
// }

// function ayir(x, y){
//     return x-y
// }

// function kopaytir(z, t){
//     return z*t
// }

// function amalBajar(a, b, amalFunction){
//     console.log(amalFunction(a, b))
// }

// amalBajar(10, 5, qosh)
// amalBajar(10, 5, ayir)
// amalBajar(10, 5, kopaytir)

//12.2
// function kopaytiruvchi(kopaytiruvchiMiqdori){
//     return function(son){
//         return son * kopaytiruvchiMiqdori
//     }
// }

// let ikkiMartakopaytir = kopaytiruvchi(2)
// console.log(ikkiMartakopaytir(5))

//13
//13.1
// console.log(this)

// //13.2
// let foydalanuvchi = {
//     ism: "Ali",
//     salomBer: function(){
//         console.log(`Salom ${this.ism}`)
//     }
// }

// foydalanuvchi.salomBer()

// //13.3
// function oddiyFunksiya(){
//     console.log(this)
// }

// oddiyFunksiya()

//13.4
// function Mashina(nomi, marka){
//     this.nomi = nomi;
//     this.marka =marka
// }

// console.log(new Mashina("BMW", "audi"))

// let mashina1 = new Mashina("BMW", "audi")
// console.log(mashina1.nomi, mashina1.marka)

//13.5

// let odam = {
//     ism: "Ali",
//     salom:function(){
//         let arrowFunction = () =>{
//             console.log(`salom ${this.ism}`);
//         }
//         arrowFunction();
//     }
// }

// odam.salom()

//15
//15.1 call() method
// function salom(ism){
//     return `salom mening ismim ${ism}`
// }

// let odam = {
//     ism:"javohir"
// }

// console.log(salom.call(odam, "Ulugbek"))

// function tanishtirish(ism, yosh){
//     console.log(`salom ${ism}, siz ${yosh} yoshdasiz`)
// }

// let obj = {
//     ism:"Javohir",
//     yosh:20
// }

// tanishtirish.call(obj, "Ulugbek", 20)

//15.2 apply() method
// function salom(ism, yosh){
//     console.log(`salomm ${ism}  yaxshimisiz, siz ${yosh} dasiz`)
// }

// let obj = {
//     name:"Javohir", 
//     age:"20"
// }

// salom.apply(obj, [obj.name, obj.age])

//15.3 bind() method

// function salom(ism, yosh){
//     console.log(`salom ${ism}, siz ${yosh} yoshdasiz`)
// }

// let obj = {
//     ism:"Javohir",
//     yosh:20
// }

// let yangi = salom.bind(obj)
// yangi("Ulugbek", 20)

//16 exec() and test() methods
//16.1 exec() method

// let regex = /salom/;
// let result = regex.exec("salom dunyo")

// console.log(result)

// let result2 = regex.test("salom dunyo") 
// console.log(result2)

// function bankHisobi(dastlapkiHisob){
//     let balans = dastlapkiHisob
//     return {
//         depozit: function(qoshildi){
//             balans+=qoshildi
//             return {
//                 yechish:function(yechildi){
//                     balans-=yechildi
//                     return{
//                         balansKorish:function(){
//                             console.log(balans)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

// let hisob = bankHisobi(1000)
// hisob.depozit(500).yechish(200).balansKorish()

//2 array
// let a= 2;
// let b=3;
// let arr = [a, b]
// let n=5;
// for(let i=2; i<n; i++){
//     let yangi = 0;
//     for(let j=0; j<i; j++){
//         // yangi += arr[j]
//     }
//     arr.push(yangi)
// }
// console.log(arr);

// console.log(arr.reverse())

//3
// let arr = [4, 5, 7, 8, 6, 9]
// let sum =0;
// let newArr = []
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!==0){
//         sum++
//         newArr.push(arr[i])
//     }
// }

// console.log(sum, newArr);

//4
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = []
// for(let i=1; i<=arr.length; i+=2){
//     newArr.push(arr[i])
// }

// console.log(newArr.reverse());

//5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = 2;
// let l = 6;
// let yigindi = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < k || arr[i] > l) {
//         yigindi += arr[i]
//     }
// }
// console.log(yigindi)

// function getOddMin(arr){
//     let newArr = [];
//     for(let i=0; i<arr.length; i++){
//         if(i%2===0){
//             newArr.push(arr[i])
//         }
//     }
//     let minimal = Math.min(...newArr)
//     console.log(minimal)
// }

// let ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// getOddMin(ARR)
// console.log(...ARR)

// let obj = {
//     ism: "ali",
//     yosh:20,
//     familya: "vali"
// }

// console.log(...Object.values(obj));
// console.log(...Object.keys(obj));
// console.log(Object.entries(obj));
// console.log(JSON.stringify(obj));

let arr = [1, 22, 3, 4, 53, 6, 7, 8, 9, 10];





