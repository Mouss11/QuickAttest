var inputs = document.getElementsByTagName('input');
var D = new Date();
var datetime = [`${D.getFullYear()}-${('0'+(D.getMonth() + 1)).slice(-2)}-${('0'+D.getDate()).slice(-2)}`,`${('0' + D.getHours()).slice(-2)}:${('0' + D.getMinutes()).slice(-2)}`];
var submit = document.getElementById('generate-btn');

chrome.storage.local.get('identity', (data) => {
    console.log(data)
    for (i = 0; i < 6; i++){
        inputs[i].value = data['identity'][i];
    }
    inputs[7].value = datetime[0];
    inputs[8].value = datetime[1];
    //submit.click();
});

console.log(datetime);