document.body.style.backgroundColor = "pink"
document.write("Sana asıgım")

//let h2 = document.getElementsByTagName('h2')
let title = document.getElementById('title')
title.innerHTML = `<big style="color:purple">çok güzelsin ve bu renk daha horny</big>`
console.log(title.innerHTML)

let link = document.querySelector("#Kodluyorumaskımbebegimomrum");
link.innerHTML += "ve azdırıcı"
link.style.color = "red"

link.classList.add('btn')

let username = prompt("lütfen isminizi giriniz")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML}<big style="color:red">${username}</big>`
