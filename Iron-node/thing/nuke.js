var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
  for (var t = "/", o = 0; o < 100; o++)
    history.pushState(0, 0, t += o.toString())
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)