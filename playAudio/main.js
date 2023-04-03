let len = document.querySelectorAll("button").length
for(let i=0; i<=len; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var text = this.innerHTML
        console.log(text);
        // console.log("hello");
        // console.log(this.click);
        playAudio(text)
        addStyle(text)
        
        
    })
}

// key press event
document.addEventListener("keypress", function(e){
    console.log("clicked");
    let text = e.key 
    playAudio(text)
    addStyle(text)
})


function playAudio(text){
    
    switch(text){
        case 'a':
        var audio = new Audio("./001.mp3");
        audio.play();
        break;

        case 'b':
        var audio = new Audio("./002.mp3");
        audio.play();
        break;

        case 'c':
        var audio = new Audio("./003.mp3");
        audio.play();
        break;
    }
    console.log('Play audio call');
}

function addStyle(text){
    
    let selectedbtn = document.querySelector("."+text)
    selectedbtn.classList.add("btn")
    console.log('Animation call');

    setTimeout(function(){
        selectedbtn.classList.remove('btn')
    }, 5000)
}

