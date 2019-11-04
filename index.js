'use strict';

function getDogImages(dogs){
    console.log('generating dog images...');
    fetch(`https://dog.ceo/api/breeds/image/random/${dogs}`)
        .then(response => response.json())
        .then(responseJSON =>console.log(responseJSON.message))
        .catch(error => console.log('An error has occured; please try again.'));
}

function formListener(){
    console.log('listening for form submission...');
    $('form').submit(event => {
        event.preventDefault();

        const numberOfDogs = $('#dogs').val();
        getDogImages(numberOfDogs);
    });
}

$(function() {
    console.log('Application has loaded.');
    formListener();
})