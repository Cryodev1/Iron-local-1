const form = document.getElementsByTagName('form')[0];
const input = document.getElementById('url');
const lediv = document.getElementsByClassName('rhnewtab')[0];

let currenttab = 0;
let totaltabs = 1;

form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    try {
      await registerSW();
    } catch (err) {
      throw err;
    }
  
    let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        let coollink = __uv$config.prefix + __uv$config.encodeUrl(url);

        document.getElementById('frame' + currenttab).src = coollink
  });

function switchtab(x) {
    if(x === currenttab) {
        return;
    }
   document.getElementById('chrome-tab' + currenttab).removeAttribute("active")
   document.getElementById('chrome-tab' + x).setAttribute("active", "")
   document.getElementById('frame' + x).style.width = "100%"
   document.getElementById('frame' + x).style.height = "95%"
   document.getElementById('frame' + currenttab).style.width = "0%"
   document.getElementById('frame' + currenttab).style.height = "0%"
   currenttab = x
   updateLink();
}

function refresh() {
    document.getElementById('frame' + currenttab).src = document.getElementById('frame' + currenttab).contentWindow.location.href
}

function closetab(x) {
    let closest = document.getElementsByClassName("chrome-tab")[0].id.replace("chrome-tab", "")
    if(totaltabs === 1) {
        document.getElementById('frame' + closest).style.width = "100%"
        document.getElementById('frame' + closest).style.height = "95%"
        document.getElementById('frame' + closest).src = 'http://localhost:8080/service/https://google.com/'
        return;
    }
    document.getElementById("frame" + x).remove()
    document.getElementById("chrome-tab" + x).remove()
    if(currenttab === x) {
        document.getElementById("chrome-tab" + closest).setAttribute("active", "")
        document.getElementById('frame' + closest).style.width = "100%"
        document.getElementById('frame' + closest).style.height = "95%"
        currenttab = closest
    }
    totaltabs -= 1
    document.getElementsByClassName("chrome-tabs-newtab-btn")[0].style.left = 250 * totaltabs + "px"
    if((250 * totaltabs + 258) > window.innerWidth) {
        var slides = document.getElementsByClassName("chrome-tab");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.width = (100/(totaltabs + 1)) + "%"
            slides[i].style.marginLeft = ((parseInt(slides[i].style.width.replace("%"))*i) + "%")
        }
        document.getElementsByClassName("chrome-tabs-newtab-btn")[0].style.left = (parseInt(slides[0].style.width.replace("%", "")) * totaltabs + "%")
    } else {
        var slides = document.getElementsByClassName("chrome-tab");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.width = "100%"
            slides[i].style.marginLeft = 250 * (i) + "px"
        }
    }
}

function newtab() {
    var div = document.getElementById('chrome-tab' + currenttab),
    clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = 'chrome-tab' + (totaltabs)
    if(!((250 * totaltabs + 258) > window.innerWidth)) {
        clone.style.marginLeft = 250 * totaltabs + "px"
    }
    clone.style.width = (100/(totaltabs + 1)) + "%"
    clone.querySelector(".chrome-tab-drag-handle").removeAttribute("onclick")
    let a = totaltabs
    clone.querySelector(".chrome-tab-drag-handle").onclick = function(){switchtab(a)};
    div.removeAttribute("active")
    document.getElementsByClassName("chrome-tabs-content")[0].appendChild(clone);
    document.getElementById('frame' + currenttab).style.width = "0%"
    document.getElementById('frame' + currenttab).style.height = "0%"
    document.getElementById('chrome-tab' + a).querySelector(".chrome-tab-close").setAttribute("onclick", "closetab(" + a + ")")
    currenttab = totaltabs;
    totaltabs += 1;
    let newframe = document.createElement("iframe")
    newframe.id = "frame" + a
    newframe.style.width = "100%"
    newframe.style.height = "95%"
    newframe.frameBorder = "0"
    newframe.src = "http://localhost:8080/service/https://google.com/"
    newframe.setAttribute("onload", "updateLink()")
    document.getElementsByClassName("chrome-tabs-newtab-btn")[0].style.left = 250 * totaltabs + "px"
    document.getElementsByClassName("rhnewtab")[0].appendChild(newframe)
    if((250 * totaltabs + 258) > window.innerWidth) {
        var slides = document.getElementsByClassName("chrome-tab");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.width = (100/(totaltabs + 1)) + "%"
            slides[i].style.marginLeft = ((parseInt(slides[i].style.width.replace("%"))*i) + "%")
        }
        document.getElementsByClassName("chrome-tabs-newtab-btn")[0].style.left = (parseInt(slides[0].style.width.replace("%", "")) * totaltabs + "%")
    }
}

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function goback() {
    document.getElementById("frame" + currenttab).contentWindow.history.back()
}

function goforward() {
    document.getElementById("frame" + currenttab).contentWindow.history.forward()
}

function updateLink() {
    document.getElementById('chrome-tab' + currenttab).querySelector(".chrome-tab-title").innerHTML = document.getElementById("frame" + currenttab).contentDocument.title
    let link = document.getElementById("frame" + currenttab).contentWindow.location.href
    link = link.replace('http://localhost:8080/service/', "")
    link = __uv$config.decodeUrl(link)
    input.value = link
    document.getElementById('chrome-tab' + currenttab).querySelector(".chrome-tab-favicon").style.backgroundImage = "url(https://s2.googleusercontent.com/s2/favicons?domain_url=" + link + ")"
}

function dark() {
    localStorage.setItem("cryotheme", "dark");
    document.getElementsByClassName("browser-bar")[0].style.backgroundColor = "#303030"
    form.style.backgroundColor = "#151515"
    input.style.textColor = "white"
    document.getElementsByClassName("addressbar")[0].style.backgroundColor = "#151515"
    document.getElementsByTagName("body")[0].style.backgroundColor = "#151515"
    input.style.color = "white"
}

if(localStorage.getItem("cryotheme") === "dark") {
    dark()
}