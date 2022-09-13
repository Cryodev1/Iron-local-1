var i = 1
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

function load() {
  //Load cookies
  let theme = getCookie("theme")

  if (theme === "") {
    setCookie("theme", "red", 9999)
    theme = "red"
  }


  document.getElementById("cryosveryoriginallink").className = theme
  document.getElementById("reload").className = theme
  document.getElementById("Exit").className = theme
  document.body.style.backgroundImage = "url(" + theme + ".gif)"

  let proxy = getCookie("proxy")
  if (proxy === "") {
    setCookie("proxy", "uv", 9999)
  }
  document.getElementsByClassName("cryoscoolimage")[0].src = theme + ".png"
  document.getElementById("shortcut icon").href = theme + ".png"
}

function setframe(frame, input) {
  //set iFrame for proxy
  frame.style.width = "100%"
  frame.style.height = "900px"
  input.style.marginTop = "-2.5%"
  input.style.left = "35%"
  input.style.position = "absolute"
  document.getElementById("reload").style.display = "block"
  document.getElementById("Exit").style.display = "block"
}

function proxy() {
  //set proxy and create link, could be much better optimized
  var proxy = getCookie("proxy")
  var frame = document.getElementById("frame")
  if (proxy === "wom") {
    document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      frame.src = "https://w.cryodream.dev/main/" + input.value
      setframe(frame, input)
    } else if (input.value) {
      document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
      frame.src = "https://w.cryodream.dev/main/https://www.google.com/search?q=" + input.value
      setframe(frame, input)
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "uv") {
    document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
    var input = document.getElementById('cryosveryoriginallink');
    
    if (input.value.startsWith("http")) {
      frame.src = "http://localhost:8080/service/" + input.value
      setframe(frame, input)
    } else if (input.value) {
      document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
      frame.src = "http://localhost:8080/service/https://www.google.com/search?q=" + input.value
      setframe(frame, input)
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "ram") {
    document.getElementsByClassName("cryoscoolimage")[0].style.display = "none"
    var input = document.getElementById('cryosveryoriginallink');

    if (getCookie("ram-alert") !== "0") {
      if (confirm("Rammerhead does not work with the input link above, confirm to hide this message forever")) {
        setCookie("ram-alert", "0", 9999)
      }
    }
    frame.src = "https://r.cryodream.dev/"
    setframe(frame, input)
  }
}
function reload() {
  document.getElementById("frame").src = document.getElementById("frame").src
}

function exit() {
  //get rid of frame
  var input = document.getElementById('cryosveryoriginallink');
  var frame = document.getElementById("frame");
  frame.src = "";
  frame.style.width = "0px"
  frame.style.height = "0px"
  input.style.marginTop = "6%"
  input.style.position = "relative"
  input.style.left = "0%"
  document.getElementById('Exit').style.display = "none"
  document.getElementById('reload').style.display = "none"
  document.getElementsByClassName("cryoscoolimage")[0].style.display = "block"
}

function setlink(letter, input) {
  if (input.startsWith("http")) {
    return "https://" + letter + ".cryodream.dev/main/" + input
  } else if (input) {
    return "https://" + letter + ".cryodream.dev/main/https://www.google.com/search?q=" + input
  } else {
    alert('Please provide a link. It does not require https://.');

  }
}

function direct() {
  //I dont even know why I'm not spending time optimizing my code
  var proxy = getCookie("proxy")
  var input = document.getElementById('cryosveryoriginallink');
  var link;
  if (proxy === "wom") {
    link = setlink("w", input.value)
  } else if (proxy === "uv") {
    window.open("http://localhost:8080/service/" + input.value, '_blank')
    return;
  } else if (proxy === "ram") {
    if (getCookie("ram-alert") !== "0") {
      if (confirm("Rammerhead does not work with the input link above yet, confirm to hide this message forever")) {
        setCookie("ram-alert", "0", 9999)
      }
    }
    link = "https://r.cryodream.dev"
  }
    window.open(link, '_blank')
}

function ab() {
  //Seriously this is 3 different functions that pretty much do the same thing
  var proxy = getCookie("proxy")
  if (proxy === "wom") {
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      var link = "https://w.cryodream.dev/main/" + input.value
      var page = new ABC({
        "type": "blank",
        "url": ""
      })
      page.setUrl(link)
      page.open()
    } else if (input.value) {
      var link = "https://w.cryodream.dev/main/https://www.google.com/search?q=" + input.value
      var page = new ABC({
        "type": "blank",
        "url": ""
      })
      page.setUrl(link)
      page.open()
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "uv") {
    var input = document.getElementById('cryosveryoriginallink');
    if (input.value.startsWith("http")) {
      var link = "http://localhost:8080/service/" + input.value
      var page = new ABC({
        "type": "blank",
        "url": ""
      })
      page.setUrl(link)
      page.open()
    } else if (input.value) {
      var link = "http://localhost:8080/service/https://www.google.com/search?q=" + input.value
      var page = new ABC({
        "type": "blank",
        "url": ""
      })
      page.setUrl(link)
      page.open()
    } else {
      alert('Please provide a link. It does not require https://.');
    }
  } else if (proxy === "ram") {
    var input = document.getElementById('cryosveryoriginallink');

    if (getCookie("ram-alert") !== "0") {
      if (confirm("Rammerhead does not work with the input cryosveryoriginallink above, confirm to hide this message forever")) {
        setCookie("ram-alert", "0", 9999)
      }
    }
    var page = new ABC({
      "type": "blank",
      "url": "https://r.cryodream.dev/"
    })
    page.open()
  }
}