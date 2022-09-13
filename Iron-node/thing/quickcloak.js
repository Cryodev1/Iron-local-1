var vaporscript = document.createElement("script")
vaporscript.innerHTML = `
var oldtitle = document.title
var oldfavicontype = "none"
var oldfavicon;

var favicon1 = document.querySelector("link[rel='icon']")
var favicon2 = document.querySelector("link[rel='shortcut icon']")

document.title = "Dashboard"

if (favicon1) {
favicon1.href = 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico'
} else if (favicon2) {
favicon2.href = 
'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico'
} else {
var favicon = document.createElement("link")
favicon.rel = "icon"
favicon.href = 'https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico'
document.getElementsByTagName("head")[0].appendChild(favicon)
}
`
document.getElementsByTagName("html")[0].appendChild(vaporscript)