document.addEventListener('DOMContentLoaded', () => {
    var gen = document.getElementById('generate');
    var savegen = document.getElementById('save-generate');
    var save = document.getElementById('save');
    var inputs = document.getElementsByTagName('input');
    var url = 'https://media.interieur.gouv.fr/deplacement-covid-19/';
    var content = [];
    chrome.storage.local.get('identity', (data) => {
        if (data['identity']){
            console.log('data', data);
            data['identity'].forEach((elem, i = 0) => {
                console.log(inputs, i)
                inputs[i].value = elem;
            })
        }
    })

    savepref = () => {
        var inputs = document.getElementsByTagName('input');
        for (var inp of inputs) {
            if (inp.type != 'checkbox' && inp.value){
                content.push(inp.value);
            }      
        };
        console.log(content);
        chrome.storage.local.set({identity: content});
    } 

    gotogouv = () => {
        window.open(url);
    }

    gen.addEventListener('click', () => {
        gotogouv();
    })

    savegen.addEventListener('click', () => {
        savepref();
        gotogouv();
    })

    save.addEventListener('click', () => {
       savepref();
    })
})