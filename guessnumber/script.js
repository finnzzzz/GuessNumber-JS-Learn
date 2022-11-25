'use strict';

//初始隨機數
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//初始分數
let score = 20;

//最高分數
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = 
    message;
}



document.querySelector('.check').addEventListener('click',function(){
    const guess =Number(document.querySelector('.guess').value);
    console.log(guess);

    //無數值
    if(!guess){
        // document.querySelector('.message').textContent =
        // '⛔ No number';
        displayMessage('⛔ No number');


    //答對
    }else if (guess === secretNumber){
        // document.querySelector('.message').textContent =
        // '🎊 Correct Number';
        displayMessage('🎊 Correct Number');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').disabled = true;
        document.querySelector('.guess').disabled = true;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = 
            highscore;
        }

        }else if (guess !== secretNumber){
            if (score > 1) {
                // document.querySelector('.message').textContent =
                // guess > secretNumber ? '❌ Too high！' : '❌ Too low！';
                displayMessage(guess > secretNumber ? '❌ Too high！' : '❌ Too low！');
            score --;
            document.querySelector('.score').textContent = score
            //輸
            }else{
                // document.querySelector('.message').textContent
                // = 'You lost the game';
                displayMessage('You lost the game');
                document.querySelector('.score').textContent =
                0;
            }   
            
        }

    //數值太高
    // }else if (guess > secretNumber){
    //     if (score > 1) {
    //         document.querySelector('.message').textContent =
    //     '❌ Too high！';
    //     score --;
    //     document.querySelector('.score').textContent = score
    //     //輸
    //     }else{
    //         document.querySelector('.message').textContent
    //         = 'You lost the game';
    //         document.querySelector('.score').textContent =
    //         0;
    //     }   

    // //數值太低
    // }else if (guess < secretNumber){
    //     if (score > 1) {
    //     document.querySelector('.message').textContent =
    //     '❌ Too low！'
    //     score --;
    //     document.querySelector('.score').textContent = score
    //     //輸
    //     }else{
    //         document.querySelector('.message').textContent
    //         = 'You lost the game';
    //         document.querySelector('.score').textContent =
    //         0;
    //     }   
    }
);

//again按鈕
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 
    // 'start guessing...';
    displayMessage('start guessing...');

    document.querySelector('.score').textContent =
    score;
    document.querySelector('.number').textContent = 
    '?';
    document.querySelector('.guess').value =
    '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.check').disabled = false;
    document.querySelector('.guess').disabled = false;
})