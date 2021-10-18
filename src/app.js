console.log("Hello World")

//Değişken Tanımlama

//dolarDun = "Ankara" //yani tipi değiştirebilirsin
let dolarBugun = 9.30

let dolarDun = 9.20

 /*{                       // çıktıda 9.20 alır çünkü burası başka bir kısım.
    let dolarDun = 9.10  // ama 'let' yerine 'var' keywordunu kullanarak yazsaydık çıktı 9.10 olarak değişirdi.
 }                       // o yüzden  'var' yerine 'let' kullanılıyor. 'var' eski bir dil. */

console.log(dolarDun)

const euroDun = 11.2 //const ile veriyi atarsan bir daha değiştiremezsin
//euroDun = 11    //o yüzden bu çalışmaz hata verir.
console.log(euroDun)

//Array (dizi)
let konutKredileri = ["Konut Kredisi", "Eamlak Konut Kredisi", "vs vs vs"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)