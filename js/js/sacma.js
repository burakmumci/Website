document.body.style.backgroundColor = "aqua"
let lastchild = document.querySelector("ul#list>li:last-child")
lastchild.innerHTML = "son öğe değiştirildi"

let firstchild = document.querySelector("ul#list>li:first-child")
firstchild.innerHTML = "ilk öğe atomlarına ayrıldı"

const ulDOM = document.querySelector("ul#list")

let liDom = document.createElement('li')

liDom.innerHTML = `<big style="color:red">çok güzelsin ve bu renk daha horny</big>`

ulDOM.prepend(liDom)
