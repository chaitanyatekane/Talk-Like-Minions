const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#minion-output");
const translateBtn = document.querySelector("#translateBtn");
const serverUrl = "https://api.funtranslations.com/translate/pirate.json";

console.log(inputText.value);

function createUrl(text){
    return encodeURI(serverUrl + "?" + "text=" + text);
}

function errorHandler(error){
    console.log("Error is occurred"+error);
    alert("Looks like server is down. Please try again after sometime. This is because, our translation API is public. For public API calls this is 60 API calls a day with distribution of 5 calls an hour.")
}

function translate(e){
    e.preventDefault();
    fetch(createUrl(inputText.value))
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated
    })
    .catch(errorHandler);
}

translateBtn.addEventListener('click', translate);