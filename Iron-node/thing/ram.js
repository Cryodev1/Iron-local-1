var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
var page = new ABC({
    "type": "blank", //Blank, blob, or overwrite
    "url": "https://r.cryodream.dev/"
})
page.open()
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)