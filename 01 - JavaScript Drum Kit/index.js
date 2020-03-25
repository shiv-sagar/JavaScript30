function playAudio(e){
    
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);

    if(audio) {
      
      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    }
  }
  
  function removePlaying(e){
    if(e.propertyName === "transform") {
      e.target.classList.remove("playing");
    }
  }


  document.body.addEventListener("keydown", playAudio);

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removePlaying));
