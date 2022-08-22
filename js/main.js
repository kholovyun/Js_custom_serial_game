let score = 0;
let counterJake = 0;
let counterJohn = 0;
let counterMike = 0;
const createAlert = function (text){
    const bg = document.createElement('div')
    bg.className = 'alert__bg'
    document.body.append(bg)
    const alertWin = document.createElement('div')
    alertWin.className = 'alert__window'
    bg.append(alertWin)
    const alertTitle = document.createElement('h1')
    alertTitle.className = 'alert__text'
    alertTitle.innerText = text
    alertWin.append(alertTitle)
    const buttons = document.createElement('div')
    buttons.className = "alert__buttons"
    alertWin.append(buttons)
    const buttonYes = document.createElement('button')
    buttonYes.id = 'yes'
    buttonYes.innerText = 'YES'
    const buttonNo = document.createElement('button')
    buttonNo.id = 'no'
    buttonNo.innerText = 'NO'
    buttons.append(buttonYes)
    buttons.append(buttonNo)
}
const ifYes = function (answer) {
    $('#yes').on('click', () => {
        $('.alert__bg').css({
            display: 'none'
        })
        userAnswer = 'yes'
        if(answer == userAnswer){
            alert('right')
            score++
            $('.score').text('Score ' + score)
        } else {
            alert('wrong')
            score--
            $('.score').text('Score ' + score)
        }
        $('.alert__bg').remove();
    })
};
const ifNo = function (answer) {
    let userAnswer;
    $('#no').on('click', () => {
        $('.alert__bg').css({
            display: 'none'
        })
        userAnswer = 'no'
        if(answer == userAnswer){
            alert('right')
            score++
            $('.score').text('Score ' + score)
        } else {
            alert('wrong')
            score--
            $('.score').text('Score ' + score)
        }
        $('.alert__bg').remove();
    })
};

$.fn.askingFun = function (question, callback1, callback2, rightAnswer, btn) {
    this.on('click', () => {
        let selectedQuestion;
        let correctAnsw;
        if(btn === 'jake'){
            selectedQuestion = question[counterJake];
            correctAnsw = rightAnswer[counterJake];
            counterJake++
            console.log(question.length)
            if(question.length + 1 === counterJake){
                alert('Jake game is over, your score is  ' + score)
            }

        } else if (btn === 'john'){
            selectedQuestion = question[counterJohn];
            correctAnsw = rightAnswer[counterJohn];
            counterJohn++
            console.log(2)
            if(question.length + 1 === counterJohn){
                alert('JD game is over, your score is  ' + score)
            }
        } else if (btn === 'mike'){
            selectedQuestion = question[counterMike];
            correctAnsw = rightAnswer[counterMike];
            counterMike++
            console.log(1)
            if(question.length + 1 === counterMike){
                alert('Michael game is over, your score is  ' + score)
            }
        }
        createAlert(selectedQuestion)
        $('.alert__bg').css({
            display: 'block'
        })
        callback2(correctAnsw)
        callback1(correctAnsw)
    }) 
};

$('#jake__btn').askingFun(['Is the name of Jake boss Richard Holt ?', 'Does his working place Broklyn 99 ?','Is jake have childish character', 'In the most episodes Jake gives a speech from Die Hard what movie?', ' Is the real name of the Pontiac Bandit was Dog Jullie?', 'Is Jake Peralta middle name is Jeffrey?'], ifYes, ifNo, ['no','yes', 'yes', 'yes', 'no', 'yes'], 'jake')
$('#john__btn').askingFun(['Is everybody call him JD ?', 'He is very brutal','His best friend is white surger', 'Is the name of the hospital Scrubs is set in was Scared Heart?', 'Dr. John "J.D." Dorian has an older brother. And his name is Ben', 'Turk, why are you so afraid of loving me? this words was sayd by JD ?'], ifYes, ifNo, ['yes','no', 'no', 'no','yes'], 'john')
$('#michael__btn').askingFun(['Best boss in the world ?', 'He works in Dunder Bifflen','Dwight is his step son', 'Is the name of Michael film was Michael Scarn?', ' How many minutes did Michael work at Dunder Mifflin? is it 78000315614', 'What does Michael eat instead of ice cream? Mayo and black olivies'], ifYes, ifNo, ['yes ','no', 'no', 'no','yes' ], 'mike')










