var title = document.createElement("div")
title.className = "proxtitle"
title.innerText = "About Blank"
appid.appendChild(title)

var vbuttons = document.createElement("center")

var vtab = document.createElement("input")
vtab.id = "proxlink"
vtab.placeholder = "Website link"
vbuttons.appendChild(vtab)

var vbutton1 = document.createElement("button")
vbutton1.className = "ab"
vbutton1.setAttribute("onclick", "ab()")
vbutton1.innerText = "Open AB cloaked"
vbuttons.appendChild(vbutton1)

appid.appendChild(vbuttons)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".proxtitle {font-size: 30px; text-align: center; color: white; user-select: none; margin-top: 10px;} .ab {cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;} #proxlink {    background: #303134;border-radius: 2.5px;height: 50px;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;padding-left: 5px;outline: none;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
function ab() {
var link = document.getElementById("proxlink").value;
if(link.includes("https://")) {
var page = new ABC({
    "type": "blank", //Blank, blob, or overwrite
    "url": ""
})
page.setUrl(link)
page.open()
} else {
alert("Invalid, please include https://")
}
}
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)