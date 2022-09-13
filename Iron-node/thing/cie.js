var url = .getElementsByTagName("html")[0].innerHTML.toString()

var txt = document.createElement("p")
txt.setAttribute("contenteditable", "")
txt.oninput = function() {
  window.location.getElementsByTagName("html")[0].innerHTML = document.getElementsByClassName("code")[0].value
}
txt.className = "code"
txt.innerText = url
appid.appendChild(txt)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".code {height:480px;width:auto;border:1px solid #ccc;overflow:auto;color:white;background-color:black;} .vaportab {cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white;border: none;font-size: 18px;user-select: none;margin: 5px;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)

var vaporscript = document.createElement("style")
vaporscript.innerText = `
function input() {
  
}
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)