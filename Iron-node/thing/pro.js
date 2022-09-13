var title = document.createElement("div")
title.className = "proxtitle"
title.innerText = "Proxies (full screen needed)"
appid.appendChild(title)

var vbuttons = document.createElement("center")

var vtab = document.createElement("input")
vtab.id = "proxlink"
vtab.placeholder = "Website link"
vbuttons.appendChild(vtab)

var vbutton1 = document.createElement("button")
vbutton1.className = "wom"
vbutton1.setAttribute("onclick", "wom()")
vbutton1.innerText = "Womginx (broken, idk why)"
vbuttons.appendChild(vbutton1)

var vbutton2 = document.createElement("button")
vbutton2.className = "uv"
vbutton2.setAttribute("onclick", "uv()")
vbutton2.innerText = "Ultraviolet"
vbuttons.appendChild(vbutton2)

var loading = document.createElement("p")
loading.innerText = "Loading ..."
loading.id = "loading"
loading.style.fontSize = "0px"
vbuttons.appendChild(loading);

var uvframe = document.createElement("iframe")
uvframe.id = "uvframe"
uvframe.style.width = "0px"
uvframe.style.height = "0px"
uvframe.style.border = "0px"
vbuttons.appendChild(uvframe)

var womframe = document.createElement("iframe")
womframe.id = "womframe"
womframe.style.width = "0px"
womframe.style.height = "0px"
womframe.style.border = "0px"
vbuttons.appendChild(womframe)

appid.appendChild(vbuttons)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".proxtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;} .wom, .uv {cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;} #proxlink {    background: #303134;border-radius: 2.5px;height: 50px;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;padding-left: 5px;outline: none;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var vaporscript = document.createElement("script")
vaporscript.innerHTML = `

function uv() {

var link = document.getElementById("proxlink").value;
if(link.includes("https://")) {
var newlink = "https://uv-app.cryodev.repl.co/service/" + link
var page = new ABC({
    "type": "blank", //Blank, blob, or overwrite
    "url": ""
})
page.setUrl(newlink)
page.open()
} else {
alert("Invalid, please include https://")
}
}

function wom() {
var link = document.getElementById("proxlink").value;
if(link.includes("https://")) {
var newlink = "https://womginx.cryodev.repl.co/main/" + link
var page = new ABC({
    "type": "blank", //Blank, blob, or overwrite
    "url": ""
})
page.setUrl(newlink)
page.open()
} else {
alert("Invalid, please include https://")
}
}
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)