var title = document.createElement("div")
title.className = "vaportitle"
title.innerText = "CryoDevTools"
appid.appendChild(title)

var items = document.createElement("center")

var tab = document.createElement("button")
tab.className = "vaportab"
tab.innerText = "Tab Cloak"
tab.setAttribute("onclick", 'new Nightmare({"title": "Tab Cloak","type": "js","js": "https://cryodream.dev/thing/tab.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(tab)

var inspect = document.createElement("button")
inspect.className = "vaportab"
inspect.innerText = "Inspect Element"
inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Avo/avo.min.js';document.body.appendChild(a);}())")
items.appendChild(inspect)

var canvascloak = document.createElement("button")
canvascloak.className = "vaportab"
canvascloak.innerText = "Quick Cloak"
canvascloak.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cryodream.dev/thing/quickcloak.min.js';document.body.appendChild(a);}())")
items.appendChild(canvascloak)

var pro = document.createElement("button")
pro.className = "vaportab"
pro.innerText = "Proxies"
pro.setAttribute("onclick", 'new Nightmare({"title": "Proxies (full screen needed)","type": "js","js": "https://cryodream.dev/thing/pro.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(pro)

var games = document.createElement("button")
games.className = "vaportab"
games.innerText = "Games (beta)"
games.setAttribute("onclick", 'new Nightmare({"title": "Games","type": "js","js": "https://cryodream.dev/thing/games.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(games)

var breaker = document.createElement("br")
items.appendChild(breaker)

var cl = document.createElement("button")
cl.className = "vaportab"
cl.innerText = "Changelog"
cl.setAttribute("onclick", 'new Nightmare({"title": "Changelog","type": "js","js": "https://cryodream.dev/thing/cl.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(cl)

var ram = document.createElement("button")
ram.className = "vaportab"
ram.innerText = "Rammerhead (works with bonk!)"
ram.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cryodream.dev/thing/ram.min.js';document.body.appendChild(a);}())")
items.appendChild(ram)

var nuke = document.createElement("button")
nuke.className = "vaportab"
nuke.innerText = "Nuker"
nuke.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cryodream.dev/thing/nuke.js';document.body.appendChild(a);}())")
items.appendChild(nuke)

var ab = document.createElement("button")
ab.className = "vaportab"
ab.innerText = "Open a link AB cloaked"
ab.setAttribute("onclick", 'new Nightmare({"title": "AB cloak","type": "js","js": "https://cryodream.dev/thing/ab.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(ab)

var cie = document.createElement("button")
cie.className = "vaportab"
cie.innerText = "Cryo's inspect element"
cie.setAttribute("onclick", `new Nightmare({"title": "Cryo's inspect element","type": "js","js": "https://cryodream.dev/thing/cie.js","width": 480,"height": 360,"theme": "dark"})`)
items.appendChild(cie)

appid.appendChild(items)

var vaporstyle = document.createElement("style")
vaporstyle.innerText = ".vaportitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.vaportab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .vaportab:hover {background: darkslategrey;}"
document.getElementsByTagName("html")[0].appendChild(vaporstyle)
