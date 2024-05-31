//Bos bir array olusturalim 

let array=[];

//Stringlerden olusan bir array olusturalım
let colors =["red","green","gray","white","black"];

//Numberslardan olusan bir array olusturalım
var Numbers=[1,23,15,65,32,89];

console.log(colors[4])
console.log(Numbers[3])

//push(): dizinin sonuna yeni bir oge ekler
colors.push("yellow")
console.log(colors)

//pop(): dizinin son elamianini siler ve dondurur
let lastColor = colors.pop();

console.log(colors)
console.log(lastColor)

//shift() : dizinin basindaki elemani siler ve dondurun
let firstColor = colors.shift();

console.log(colors)
console.log(firstColor)

//splice() : diziyi herhangi bir elemandan itibaren ekler veya kaldirir
Numbers.splice(2,3,9716) //2.indexten basla 3 ogeyi kaldir ve yerine 9716 ekle
console.log(Numbers)

//concat(): iki veya daha fazla array'i birlestiriyor
let newArray = colors.concat(Numbers);

console.log(newArray)
