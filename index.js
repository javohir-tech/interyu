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

//22 obyekt protatape
// let animal = {
//     eats: true,
//     walk() {
//         return ("animal walking")
//     }
// }

// let dogs = {
//     barks: true,
//     __proto__: animal
// }

// console.log(dogs)
// console.log(dogs.eats)
// console.log(animal.walk())

//23 callback

// function Buyurtma(callback) {
//     console.log("buyurtma qabul qilindi")

//     setTimeout(function(){
//         callback()
//     }, 5000)
// }

// Buyurtma(callback)

// function callback(){
//     console.log("buyurtma tayyor")
// }

//24 eerrorla r asosan 7ta 
//1 syntaxError bu hatolik kodda sintaksis xatolar masalan ( yoki , ni notogri qoyish
//2 referenseError bu odatda o'zgaruvchilarni yoki funksiyalarni elon qilinmagan bo'lsa ham chaqirish
//3 typeError bu hatolik noto'g'ri turdagi qiymat bilan amal bajarganda ro'y beradi 
// let num = 10;
// num(); // 'num' raqam, funksiya emas
//4 rangeError bu hatolik oraliqlarni belgilaashda kelip chiqadi masalan bironta massivni indexini belgilashda 
//let arr = new Array(-1)
//5 evalError bu hatolik eval funksiyasini noto'g'ri ihslatishdan kelip  chiqadi .hozirgi kunda bu hatolik juda kam chunki hozir eval funksiyai ishlatilinmaydi havfsizlik yuzasidan 
// Oldingi JavaScript versiyalarida paydo bo'lishi mumkin
// eval("2 + 2 = 5");
//6 URIError (URI xatoliklari)
// Tavsif: decodeURI(), encodeURI() funksiyalaridan noto‘g‘ri foydalanilganda yuzaga keladi. Bu xatoliklar URL kodlash yoki dekodlash jarayonida noto‘g‘ri belgilar qo‘llanganda paydo bo‘ladi.
// decodeURI('%'); // Noto'g'ri URI komponenti
// 7 AggregateError (Yig‘ma xatolik)

// Tavsif: Bu xatolik bir nechta xatoliklar bir vaqtning o‘zida sodir bo‘lganda ishlatiladi, masalan, bir nechta va’dalar (Promise) muvaffaqiyatsiz bajarilganda. Bu xatolik ES2021 dan boshlab joriy qilingan.
// Promise.any([
//     Promise.reject(new Error("Xatolik 1")),
//     Promise.reject(new Error("Xatolik 2")),
//   ]).catch(e => console.log(e)); // AggregateError

// let animal = {
//     eats:true,
//     name:"fill",
//     walk:function(){
//         return("salom dunyo")
//     }
// }

// let dogs = {
//     barks:false, 
//     __proto__:animal
// }

// console.log(dogs)
// console.log(dogs.eats)
// console.log(dogs.walk())
// console.log(dogs.name)

//26 recursion

// function factorial(n){
//     if(n===0) return  1 //base case
//     return n*factorial(n-1)// recursion case
// }

// factorial(5)
// console.log(factorial(5))

function person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        return  `salom memi ismim ${name} va men ${age} yoshdaman`
    }
}


const person1 = new person("ali", 20)
const person2 = new person("vali", 30)
console.log(person1.greet())
console.log(person2.greet())

