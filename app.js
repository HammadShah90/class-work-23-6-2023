const findCountry = fetch(`https://restcountries.com/v3.1/name/pakistan/`)

console.log(findCountry);

findCountry
    .then(function(response) {
        console.log(response);
        if (!response.ok) {
            throw new Error(`Status text is ${response.statusText}`)
        }
        return response.json()        
    })
    .then(function(getData) {
        console.log(getData);
        uiCreation(getData)      
    })
    .catch(function(error) {
        console.log(error);
        displayError(error);
    })


function uiCreation(data){
    console.log(data);
    const uiImage = document.querySelector('#image');
    const uiTitle = document.querySelector('.card-title');
    const uiDescription = document.querySelector('.card-text');

    uiImage.src = data[0].flags.png
    uiTitle.innerHTML = data[0].name.official
    uiDescription.innerHTML = data[0].languages.urd
}

function displayError(error){
    console.log(error);
    const errorText = document.getElementById('errorText')
    errorText.textContent = error
    const cardUi = document.getElementsByClassName('card')
    console.log(cardUi);
    cardUi[0].style.display = "none";
}

