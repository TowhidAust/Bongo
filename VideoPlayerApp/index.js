// 1. first design the UI patterns using html
// 2. control the events for foeward, backward and play button with javasript

let mediaPlayer;

function controlButtonEvents(Right, Left, PlayPause){

    let PlayPause = 0;
    $(".pauseButton").click(()=>{
        if(PlayPause==0){
            mediaPlayer.pause();
        } else{
            mediaPlayer.play();
        }
        PlayPause=1;  
    })

     $(".rightButton").click(() => {
        mediaPlayer.playeNext();
     })

        $(".leftButton").click(() => {
            mediaPlayer.playBackward();
        })
}