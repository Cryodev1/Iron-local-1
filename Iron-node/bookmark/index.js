function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let theme = getCookie("theme")


  if (theme !== "") {
    document.getElementById("cryodevtools").style.backgroundColor = theme;
    document.getElementById("shortcut icon").href = "/" + theme + ".png";
  }

  document.getElementById("cryodevtools").style.display = "block"
}

async function cryodevtools() {
  await navigator.clipboard.writeText("(javascript:(function () {var a = document.createElement('script');a.src = 'https://cryodream.dev/thing/vapor.min.js';document.body.appendChild(a);}()))");
  alert("Copied to your clipboard!")
}