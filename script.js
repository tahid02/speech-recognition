const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

const commandAndAns = [
    {
        command:'hello',
        ans:'welcome to our website do you currently own a car',
        // next time try to make if ans is yes you will ask the car color 
        // or if the ans is no then you will ask if he is going to buy in short time or not
    },
    {
        command:'how are you',
        ans:'fine'
    },
    {
        command:'what is your age',
        ans:'i am 20 now'
    },
    {
        command:'what do you do',
        ans:'nothing so much'
    },
    {
        command:'where do you live',
        ans:'jupiter'
    },
    {
        command:'what is your name',
        ans:'agdum bagdum'
    },
    {
        command:'do you own a car',
        ans:'no  i dont'
    }
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()


recognition.onstart = function () {
    console.log('voice recognition activated');
}
recognition.onresult = function (event) {
    console.log(event);
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript)
}

// window.addEventListener('load', () => {
//     recognition.start()
// })
btn.addEventListener('click', () => {
    recognition.start()
})

const readOutLoud = (message) => {

    const speech = new SpeechSynthesisUtterance() ;

   const ans =  commandAndAns.filter( chat => chat.command === message)
try{
     speech.text = ans[0].ans
}
catch{
    speech.text = 'sorry I didnt get you '
}


    speech.volume = 4;
    speech.rate = 1;
    speech.pitch = 3;

    window.speechSynthesis.speak(speech)
}










