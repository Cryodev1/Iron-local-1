function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

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

function Title() {
  setCookie("Title", document.getElementById("thelinkthinglol").value, 9999)
  alert("poggers")
}

function icon() {
  setCookie("Icon", document.getElementById("thelinkthinglol").value, 9999)
}

function checkCookie() {
  theme = getCookie("theme")
  document.getElementById("shortcut icon").href = "/" + theme + ".png"
  let user = getCookie("theme");
  if (user === "") {
    setCookie("theme", "red", 9999);
  }
  document.getElementById("theme-select").value = user
  let user2 = getCookie("proxy");
  if (user2 === "") {
    setCookie("proxy", "uv", 9999);
  }
  document.getElementById("proxy-select").value = user2;

  var x, i, j, l, ll, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");

  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
        setTheme()
        update()
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });

  }
  let color;
  if (getCookie("theme") === "red") {
    color = "darkred"
  } else if (getCookie("theme") === "lime") {
    color = "darkgreen"
  } else if (getCookie("theme") === "blue") {
    color = "darkblue"
  }
  for (whee = 0; whee < document.getElementsByTagName("select").length; whee++) {
    document.getElementsByClassName("select-selected")[whee].style.backgroundColor = color
    document.getElementsByClassName("select-items")[whee].style.backgroundColor = color
  }
}

function setTheme() {
  setCookie("theme", document.getElementsByTagName("select")[0].value, 9999);
}

function update() {
  var ele = document.getElementById('proxy-select')
  if (ele.value === "uv") {
    setCookie("proxy", "uv", 9999)
  } else if (ele.value === "wom") {
    setCookie("proxy", "wom", 9999)
  } else if (ele.value === "ram") {
    setCookie("proxy", "ram", 9999)
  }
}

