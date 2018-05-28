
duration = {}
softmin = 6;

duration.min = softmin;
duration.sec = 0;

var timer = document.querySelector('.time');

var startbt = document.querySelector('.startBt');
var stopbt = document.querySelector('.stop');

var softEgg = document.querySelector('.softEgg');
var mediumEgg = document.querySelector('.mediumEgg');
var hardEgg = document.querySelector('.hardEgg');








startbt.addEventListener('click', handleStartClick);


function handleStartClick (event) {


    console.log ('start klokken');
    //legg til html 
    var intervalObj = setInterval(handleInterval, 1000)

    function handleInterval() {

        if (duration.min == 0 && duration.sec == 0){

            clearInterval(intervalObj);


        } else {

            countDown();
            showDuration();
            stoppbt();
        }

    }

}

function countDown() {

    duration.sec =  duration.sec - 1;

    if (duration.sec < 0) {

        duration.min = duration.min -1
        duration.sec = 59;
    }
    console.log(duration);


}

function showDuration(){

    var min = duration.min;
    var sec = duration.sec;
    
    if (min < 10){

        min = '0' + min;

    }

    if (sec < 10){

        sec = '0' + sec;
    }

    timer.textContent = min + ':' + sec;


}


function stoppbt() {

    //ved start skal teksten stopp dukke opp 
    //det skal gå an og trykke på stopp for of pause klokken og starte den igjen. 
    startbt.textContent = 'STOP';
}













/*

mediumEgg.addEventListener('click', handleMediumEggClick)


function handleMediumEggClick (event){

    console.log ('medium egg er cliket på');
    //legg til html 
    mediumEgg.textContent = '06:00';
}




mediumEgg.addEventListener('click', handleMediumEggClick)


function handleMediumEggClick (event){

    console.log ('medium egg er cliket på');
    //legg til html 
    mediumEgg.textContent = '08:00';
}


hardEgg.addEventListener('click', handleHardEggClick)


function handleHardEggClick (event){

    console.log ('hard egg er cliket på');
    //legg til html 
     hardEgg.textContent = '10:00';

}

*/

