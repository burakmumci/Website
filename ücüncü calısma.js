/*let price = 100
let Stringprice = "100"
let password = true
let code = 0.8



console.log(
    "price : ", typeof(price)
)

console.log(
    "Stringprice : ", typeof(Stringprice)
)

console.log(
    "password : ", typeof(password)
)

console.log(
    "code : ", typeof(code)
)

let number2 = "25.7"
number2 = parseFloat(number2)
console.log(
 "number1 : ", parseFloat(number2), typeof(number2)
)

let number3 = 55
number3 = number3.toString()
console.log(number3 , typeof(number3)) 
*/
/*
let surname = "Burak"
const Cord = "codeacademy.com"

let Email = surname +"@"+Cord
console.log("merhaba",surname,"sitemize hoşgeldin mail adresiniz :", Email)

let info =
`${surname} sitemize hoşgeldin
 mail adresin: ${Email}
 harçlık avanstan harcanan tutar : ${13**2}
 kalan miktar : ${850-(13**2)}
 saat şu anda tam olarak ${new Date().getHours()}:${new Date().getMinutes()}`
console.log(info)
*/

/*let muallim = "hoca"
let talebe = "öğrenci";
console.log(`${muallim} bey sınav notlarını ${talebe}lerin velilerine söyledi`)
*/
/*
let not = "100"
let ogrort = "38"
not = parseInt(not)
ogrort = parseInt(ogrort)
let genelort = ((ogrort*3)+100)/4
console.log(`ilk üç sınav notunun ortalaması ${ogrort} olan ogrencimiz son sınavından ${not} alarak ortalamasını ${genelort} seviyesine çıkardı`)
*/
/*let kol = "sabrınsonuselamettir@gmail.com"
console.log(kol.length)
console.log(kol[1])
kol = kol.toUpperCase()
console.log(kol)
kol = kol.toLowerCase()
console.log(kol)
console.log(kol.slice(8,16))
let DOMAİN = kol.slice(kol.search("@"))
console.log(kol.indexOf("."))

console.log(DOMAİN.slice(0,DOMAİN.indexOf(".")))
/*kol = kol.search("b")
console.log(kol)*/ 
//console.log(kol.search("b"))

/*console.log(kol.replace(`gmail.com`,`coding.org`))

console.log(kol.includes(`sabrin`))

console.log(kol.startsWith(`d`))
console.log(kol.endsWith(`m`))
console.log(kol.toLocaleUpperCase())
console.log(kol.toUpperCase())*/
let kasıt = "kabukbağlamaz"
let fullname = `${kasıt[0].toUpperCase()}${kasıt.slice(1).toLowerCase()}`
console.log(fullname)
