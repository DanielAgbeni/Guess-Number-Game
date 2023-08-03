'use strict';
const overlay = document.querySelector('.overlay')
const show = document.querySelector('.show')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const diff = document.querySelector('.diff')
const win =  document.querySelector('.win')

overlay.classList.remove('hidden')
btn1.addEventListener('click', function () {
    diff.classList.add('hidden')
    overlay.classList.add('hidden')
//initialisation
let score = 10
let number = Math.trunc(Math.random()*20)+1
let highscore = 0 
const displayMessage = function(message){
    document.querySelector('.message').textContent= message
}

const styleNumberColor = function(numberStyle){
    document.querySelector('.number').style.backgroundColor =numberStyle
}
document.querySelector('.score').textContent = score
const winCheck = function () {
    const guess = Number(document.querySelector('.guess').value)
    
    document.querySelector('.user').textContent = guess
    // when there is no input
    if (!guess) {
   displayMessage('Input a number ⛔') 
    }
    //When guess is correct
    else if (guess === number) {
        win.classList.remove('hidden')
       displayMessage('🎉Yay you got it')
        document.querySelector('.number').textContent = number
        //text
        document.querySelector('.vs').textContent = '='
        //colour
        document.querySelector('body').style.background = 'url(celeb.gif)';
        document.querySelector('.user').style.backgroundColor = '#f01010'
       styleNumberColor('#05a728')
        document.querySelector('.vs').style.backgroundColor = '#2480b6'
        //width
        document.querySelector('.user').style.width = '20rem'
        document.querySelector('.number').style.width = '20rem'
        // new thing
        document.querySelector('.vs').style.width = '20rem'
        overlay.classList.remove('hidden')
        document.querySelector('.showScore').textContent = `Your Score = ${score}`
        overlay.addEventListener('click', function(){
            overlay.classList.add('hidden')
        })
        //
        if (score>highscore) {
            highscore = score
            document.querySelector('.highscore').textContent=highscore
        }
    }

    //when guess is wrong
    else if (guess !== number && guess <= 20 && guess>=0) {
        if (score > 1) {
           displayMessage(guess < number ? 'Too low📉': 'Too high📈')
            score --
            document.querySelector('.score').textContent = score
            }
            else{
            displayMessage('You loose')
            document.querySelector('.score').textContent = 0
            } 
    }
    //When guess is higher than 20
    else {
        displayMessage('Out of range⚠')
        show.classList.remove('hide')
        document.querySelector('.range').textContent = '⚠Out of range⚠'
        show.addEventListener('click', function(){
            show.classList.add('hide')
        })
        
    }
}
//Check button
document.querySelector('.check').addEventListener('click', winCheck)
document.addEventListener('keydown', function(p) {
    if (p.key === 'Enter') {
        winCheck()
    }
})
//Again button
document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random()*20)+1
    score = 10
    console.log(number);

    document.querySelector('.number').textContent = '?'
    document.querySelector('.user').textContent = '!'
    document.querySelector('.vs').textContent = '≠'
    displayMessage('Start guessing...') 
    document.querySelector('.score').textContent = score
    // //style
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundImage = 'linear-gradient('
    + 'to top right' + ', ' + '#222' + ', ' + '#222' + ')';
        document.querySelector('.user').style.backgroundColor = '#eee'
        styleNumberColor('#eee') 
        document.querySelector('.vs').style.backgroundColor = '#333'
    //     //width
        document.querySelector('.user').style.width = '15rem'
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.vs').style.width = '15rem'
    
} )
})
btn2.addEventListener('click', function () {
    diff.classList.add('hidden')
    overlay.classList.add('hidden')
let score = 7
let number = Math.trunc(Math.random()*20)+1
let highscore = 0 
const displayMessage = function(message){
    document.querySelector('.message').textContent= message
}

const styleNumberColor = function(numberStyle){
    document.querySelector('.number').style.backgroundColor =numberStyle
}
document.querySelector('.score').textContent = score
const winCheck = function () {
    const guess = Number(document.querySelector('.guess').value)
    
    document.querySelector('.user').textContent = guess
    // when there is no input
    if (!guess) {
   displayMessage('Input a number ⛔') 
    }
    //When guess is correct
    else if (guess === number) {
        win.classList.remove('hidden')
       displayMessage('🎉Yay you got it')
        document.querySelector('.number').textContent = number
        //text
        document.querySelector('.vs').textContent = '='
        //colour
        document.querySelector('body').style.background = 'url(celeb.gif)';
        document.querySelector('.user').style.backgroundColor = '#f01010'
       styleNumberColor('#05a728')
        document.querySelector('.vs').style.backgroundColor = '#2480b6'
        //width
        document.querySelector('.user').style.width = '20rem'
        document.querySelector('.number').style.width = '20rem'
        // new thing
        document.querySelector('.vs').style.width = '20rem'
        overlay.classList.remove('hidden')
        document.querySelector('.showScore').textContent = `Your Score = ${score}`
        overlay.addEventListener('click', function(){
            overlay.classList.add('hidden')
        })
        //
        if (score>highscore) {
            highscore = score
            document.querySelector('.highscore').textContent=highscore
        }
    }

    //when guess is wrong
    else if (guess !== number && guess <= 20 && guess>=0) {
        if (score > 1) {
           displayMessage(guess < number ? 'Too low📉': 'Too high📈')
            score --
            document.querySelector('.score').textContent = score
            }
            else{
            displayMessage('You loose')
            document.querySelector('.score').textContent = 0
            } 
    }
    //When guess is higher than 20
    else {
        displayMessage('Out of range⚠')
        show.classList.remove('hide')
        document.querySelector('.range').textContent = '⚠Out of range⚠'
        show.addEventListener('click', function(){
            show.classList.add('hide')
        })
        
    }
}
//Check button
document.querySelector('.check').addEventListener('click', winCheck)
document.addEventListener('keydown', function(p) {
    if (p.key === 'Enter') {
        winCheck()
    }
})

//Again button
document.querySelector('.again').addEventListener('click', function () {
    number = Math.trunc(Math.random()*20)+1
    score = 7
    console.log(number);

    document.querySelector('.number').textContent = '?'
    document.querySelector('.user').textContent = '!'
    document.querySelector('.vs').textContent = '≠'
    displayMessage('Start guessing...') 
    document.querySelector('.score').textContent = score
    // //style
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundImage = 'linear-gradient('
    + 'to top right' + ', ' + '#222' + ', ' + '#222' + ')';
        document.querySelector('.user').style.backgroundColor = '#eee'
        styleNumberColor('#eee') 
        document.querySelector('.vs').style.backgroundColor = '#333'
    //     //width
        document.querySelector('.user').style.width = '15rem'
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.vs').style.width = '15rem'
    
} )
})
btn3.addEventListener('click', function () {
    diff.classList.add('hidden')
    overlay.classList.add('hidden')
    let score = 5
    let number = Math.trunc(Math.random()*20)+1
    let highscore = 0 
    const displayMessage = function(message){
        document.querySelector('.message').textContent= message
    }
    
    const styleNumberColor = function(numberStyle){
        document.querySelector('.number').style.backgroundColor =numberStyle
    }
    document.querySelector('.score').textContent = score
    const winCheck = function () {
        const guess = Number(document.querySelector('.guess').value)
        
        document.querySelector('.user').textContent = guess
        // when there is no input
        if (!guess) {
       displayMessage('Input a number ⛔') 
        }
        //When guess is correct
        else if (guess === number) {
            win.classList.remove('hidden')
           displayMessage('🎉Yay you got it')
            document.querySelector('.number').textContent = number
            //text
            document.querySelector('.vs').textContent = '='
            //colour
            document.querySelector('body').style.background = 'url(celeb.gif)';
            document.querySelector('.user').style.backgroundColor = '#f01010'
           styleNumberColor('#05a728')
            document.querySelector('.vs').style.backgroundColor = '#2480b6'
            //width
            document.querySelector('.user').style.width = '20rem'
            document.querySelector('.number').style.width = '20rem'
            // new thing
            document.querySelector('.vs').style.width = '20rem'
            overlay.classList.remove('hidden')
            document.querySelector('.showScore').textContent = `Your Score = ${score}`
            overlay.addEventListener('click', function(){
                overlay.classList.add('hidden')
            })
            //
            if (score>highscore) {
                highscore = score
                document.querySelector('.highscore').textContent=highscore
            }
        }
    
        //when guess is wrong
        else if (guess !== number && guess <= 20 && guess>=0) {
            if (score > 1) {
               displayMessage(guess < number ? 'Too low📉': 'Too high📈')
                score --
                document.querySelector('.score').textContent = score
                }
                else{
                displayMessage('You loose')
                document.querySelector('.score').textContent = 0
                } 
        }
        //When guess is higher than 20
        else {
            displayMessage('Out of range⚠')
            show.classList.remove('hide')
            document.querySelector('.range').textContent = '⚠Out of range⚠'
            show.addEventListener('click', function(){
                show.classList.add('hide')
            })
            
        }
    }
    //Check button
    document.querySelector('.check').addEventListener('click', winCheck)
    document.addEventListener('keydown', function(p) {
        if (p.key === 'Enter') {
            winCheck()
        }
    })
    
    //Again button
    document.querySelector('.again').addEventListener('click', function () {
        number = Math.trunc(Math.random()*20)+1
        score = 5
        console.log(number);
    
        document.querySelector('.number').textContent = '?'
        document.querySelector('.user').textContent = '!'
        document.querySelector('.vs').textContent = '≠'
        displayMessage('Start guessing...') 
        document.querySelector('.score').textContent = score
        // //style
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundImage = 'linear-gradient('
        + 'to top right' + ', ' + '#222' + ', ' + '#222' + ')';
            document.querySelector('.user').style.backgroundColor = '#eee'
            styleNumberColor('#eee') 
            document.querySelector('.vs').style.backgroundColor = '#333'
        //     //width
            document.querySelector('.user').style.width = '15rem'
            document.querySelector('.number').style.width = '15rem'
            document.querySelector('.vs').style.width = '15rem'
        
    } )
})