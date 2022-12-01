const form = document.getElementsByTagName('form')[0];
const input = document.getElementById('url');
const lediv = document.getElementsByClassName('rhnewtab')[0];

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;

        let coollink = __uv$config.prefix + __uv$config.encodeUrl(url);

        lediv.innerHTML = `<iframe width="100%" height="100%" position="absoulte" frameBorder="0" src="${coollink}"></iframe>`
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
