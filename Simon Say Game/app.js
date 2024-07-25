// STEPS TO PLAY THE GAME:

// Step 1: Press any key on the screen => Game Start

// Step 2: Flash any button & h3 will change to next leve

// Step 3:  Check - UserInput == flashBtn

// Step 4: If (Check is true) - Repeat Step 2, else endGame.
//---------------------------------------------------------------------------------------------------------------------------------------------------

// Two Arrays to store the values:
let gameSeq = []; // values of flashBtn
let userInp = []; // values of userInput to match them with flashBtn

// Array of btns:
let btns = ["green", "red", "yellow", "blue"]; // matching the id name in html file of all 4 buttons:

// Variable to change the value of h3:
let h3 = document.querySelector('h3');

// Variable to start the game:
let gameStart = false; // game isn't started yet
let level = 0;

// Starting the game:
document.addEventListener('keypress', function() {
    if(gameStart === false){
        console.log("Start the Game");
        gameStart = true; // game will start again only after endGame:

        // calling levelUp function:
        setTimeout(() => {
            levelUp()
        }, 500);
    };
});


//function to flash a particular button:
function flashBtn(btn) {
    btn.classList.add('flash'); //adding class-flash to button from css.
    // remove class flash after 1 sec:(button will flash for 1 seconds):
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 350);
};


// Function to level up & automatic flash of buttons after starting of each new level:
function levelUp(){

    // Reset userInp[] to empty because we want to check the values from idx[0 to end]:
    userInp = [];

    level++; // increase level
    h3.innerText = `Level ${level}`; // change h3:

    // Creating radom number to choose a random button:
    let randNum = Math.floor(Math.random() * 3); // value 0 to 3:
    let randIdx = btns[randNum]; // choosing a random button using index of btns array:

    // Choosing the random button by selecting their id  using randIndx:
    let randBtn = document.getElementById(randIdx);

    // Now add the sequence of the random buttons in an array: by using index of btns:
    gameSeq.push(randIdx);
    console.log("gameSeq: ", gameSeq);

    // Calling the flashBtn function:
    setTimeout(() => {
        flashBtn(randBtn)
    }, 500); // argument is a particular button which will gonna flash automatically:
};
 

// Select all the buttons:
let allBtns = document.querySelectorAll('.btn'); // using css class assigned to all buttons:

// Fuction to check correct button is pressed or not:
function checkAns(idx) {
    
    if(userInp[idx] === gameSeq[idx]){ // idx is same for each array:

        // checking the last idx of the userInp and gameSeq (if userInp.length =! gameSeq.length) this means userInp ka last [idx] gameSeq k last [idx] jitna nahi hua:
        if(userInp.length == gameSeq.length) {
            //level up and flash btn:
            setTimeout(() => {
                levelUp();
            }, 1000);
        }

    } else{
        h3.innerHTML = `Game Over! <h2>Your Score was ${level}</h2>, Press any Key to Start :)`;

        // Just for some danger or warning effect like games:
        document.querySelector('body').classList.add('red-alert')
        setTimeout(() => {
            document.querySelector('body').classList.remove('red-alert')
        }, 1000);

        // to reset everything:
        reset();
    };
};


//Callback function for EventListener for clicking all buttons:
function pressBtns(btn){
    console.log(this); // this = the button that was clicked:

    // Now get the button which user is pressing using (id) attribute:
    userBtnPress = btn.getAttribute('id');

    //Now add the value of pressed button into the userInp:
    userInp.push(userBtnPress);
    console.log('userInp:',userInp);
    // now call the function which will flash our button
    flashBtn(btn);

    // Call checkAns function with argument of last button pressed (which will be pushed at the end of the userInp[])
    checkAns(userInp.length-1);
};


// ForEach Loop to add event listener on the collection of the all buttons:
for(let btn of allBtns){
    // if(gameStart == true){
        btn.addEventListener('click', function(){
            if(gameStart == true){
                pressBtns(btn)
            }
        });

    // }
};

// function to reset everything after pressing wrong button:
function reset() {
    gameStart = false;                                               
    gameSeq = [];
    userInp = [];
    level = 0;
}

// To change the between dark/white theme
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.querySelector('.theme-toggle');

    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        this.classList.toggle('theme-dark-toggle')
    });
});
