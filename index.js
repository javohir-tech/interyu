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

// function construktor(name, age){
//     this.name = name, 
//     this.age = age,
//     this.method = function(){
//         return(`salom men ${name} man va men ${age} yoshdaman`)
//     }
// }

// const person = new construktor("ali", 20)
// console.log(person.method())

// //n!

// function factorial(n){
//     if(n===0) return n=1 // base case

//     return n*factorial(n-1)
// }

// console.log(factorial(5))

// //29

// const text = "salom"

// const char  = text.charAt(2)
// console.log(char)
// const char2 = text[3]
// console.log(char2)

//32  aarow function
//arrow funksiyasida this kalit so'zi tashqi konteksdan olingan merosga ishora qiladi qolgan funksiyalarda esa ichki konteksga ishora qiladi
// bu degani arrow funksiyasida this kalit so'zi bilan consolega natijani chiqarmoqchi bo'lsak yoki undefint yoki tashqi konteksdan kelgan malumot chiqadi 

// const myfunction = (a, b) => {
//     return a + b
// }

// console.log(myfunction(2, 5))

// const yangiFunction = (a, b) => a + b;

// console.log(yangiFunction(2, 4))

//arrow example
// this.name = "Tashqi konteks"

// const person = {
//     name: "Ali",
//     boshqaFunksiyalar: function () {
//         console.log(this.name)
//     },
//     arrowFunksiyasi: () => {
//         console.log(this.name)
//     }
// }

// person.boshqaFunksiyalar()
// person.arrowFunksiyasi()

//33
// const newCar = {
//     init(make, model){
//         this.make = make;
//         this.model = model
//     },
//     getData(){
//         return `${this.make} ${this.model}`
//     }
// }

// const myCar = Object.create(newCar)
// myCar.init("Gm", "Nexia2")
// console.log(myCar.getData())

//new kalit so'zi bilan yangi object yaratish
// function construktorFunction(make, model){
//     this.make = make;
//     this.model = model;
//     return `${make}${make}`
// }

// const yangi  = new construktorFunction("GM", "Nexia3")


// function yaratuvchiFunksiya(qoshiladiganQiymat){
//     return function(son){
//         return son + qoshiladiganQiymat
//     }
// }

// const qosh10 = yaratuvchiFunksiya(10)

// console.log(qosh10(5));

// function NewFunction(name, age){
//     this.name = name;
//     this.age = age;
//     this.method = function(){
//         return `${this.name}${age}`
//     }
// }

// const newObj = new NewFunction("ali", "20")
// console.log(newObj)
// console.log(newObj.method())

// function ulanadiganFunksiya( familya){
//     console.log(`salom meni ismim ${this.name} ${familya}  va men ${this.age} yoshdaman`)
// }

// const obj = {
//     name: "Javohir",
//     age:21
// }

// const tayyorMalumot = ulanadiganFunksiya.bind(obj)
// tayyorMalumot("Suvonov")

// const regex = /(\d{2})-(\d{2})-(\d{4})/
// const str = "12-02-2024"
// const result = regex.exec(str)
// console.log(result)

// function curreyingFunction(a,  b){
//     return function(b){
//         return a+b
//         }
//     }


// const funcksiya1 = curreyingFunction(2)
// console.log(funcksiya1)
// const funcksiya2 = funcksiya1(3)
// console.log(funcksiya2)

// function restoran(keladiganFunksiya){
//     console.log("buyurtma qabul qilindi")

//     setTimeout(function(){
//         keladiganFunksiya()
//     }, 5000)
// }

// function keladiganFunksiya(){
//     console.log('buyurtma tayyor') 
// }


// restoran(keladiganFunksiya)

// //n!

// function Factorial(n){
//     if(n===0) return n=1// base case

//     return n*Factorial(n-1)
// }

// console.log(Factorial(5))

// this.name = "Ali"

// const obj = {
//     name:"Javohir",
//     olish: ()=>{
//         return(this.name)
//     }
// }

// console.log(obj.olish())

//33
//protatype design patern     protatip dizayn andozasi 

// const obj = {
//     model:"Audi",
//     color:"qizil"
// }

// const yangiObj = Object.create(obj)
// yangiObj.model = "BMW"
// yangiObj.color = "oq" 
// console.log(yangiObj)


// const carProtatype = {
//     drive(){
//         console.log(`${this.model} moshinasi haydayapti`);
//     },
//     getColor(){
//         return `${this.model} moshinasi ${this.color} rangda`
//     }
// }

// const car1 = Object.create(carProtatype, {
//     model: {value:"BMW", writable:true},
//     color:{value:"oq"}
// })

// car1.drive()
// console.log(car1.getColor())

// function myFunction(familya){
//     return `Salaom men ${familya} ${this.name} va men ${this.age} yoshdaman`
// }

// const  obj = {
//     name:"ali",
//     age:20,
// }

// const callWork = myFunction.call(obj, "Suvonov")
// console.log(callWork)
//34
// (...rest) operatori
// function  sum(...numbers){
//     return numbers
// }

// console.log(sum(1, 2, 3, 4))
// //(...spread) operatori
// const arr = ["olma", "nok"]
// console.log(...arr)
// const newArr = [...arr, "uzum", "O'rik"]
// console.log(newArr) 

//reduse
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.reduce((saqlaydi, joriy)=>saqlaydi+joriy, 0))

// 36 object yaratish turlari 
//1 chisi qolda kiritish

// 2 new kalit so'zi bilan
// const obj = new Object()
// obj.name = "Asil"
// console.log(obj)

// 3 Object.create() bilan
// const proto = {
//     greet: function(){
//         console.log("salom")
//     }
// }

// const obj2 = Object.create(proto)
// obj2.age = 20
// console.log(obj2)

// // 4 assign
// const obj3 = Object.assign( obj, obj2)
// console.log(obj3)

// spreed operatori bilan
// const obj4 = {...obj, ...obj2, obj3}
// console.log(obj4)

//fromEntries
// const entries = [['name', 'Ali'], ['age', 20]]
// const obj5 = Object.fromEntries(entries)
// console.log(obj5)

//Map() dan foydalanip

// const map = new Map()
// map.set('name', 'Vali')
// map.set('age', 21)
// let obj6 = Object.fromEntries(map)
// console.log(obj6)

//37 Promise  

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve('bajarildi')
//         reject("yemadi")
//     }, 2000)
// })

// promise
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

//38
//class kalit sozi  bilan obyekt yartish 
// class Person{
//     constructor(name, age){
//         this.name = name,
//         this.age = age
//     }
//     greet(){
//         return `${this.name}${this.age}`
//     }
// }

// const obj = new Person("Ali", 20)
// console.log(obj);

function myFunction(familya){
    return `salom men ${this.name} ${familya} va men ${this.age} yoshdaman`
}

const obj = {
    name:"Javohir", 
    age:20
}

const yangiObject = myFunction.call(obj, "Suvonov")
console.log(yangiObject)



