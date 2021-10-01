function playAudio(event){
  let key = event.code.substr(3);
  let src = `audio/${key}.mp3`;
  let audio = new Audio(src);
  audio.play();
}

document.addEventListener("keydown",function(event){
  if(event.code === "KeyA") playAudio(event);
  else if(event.code === "KeyS") playAudio(event);
  else if(event.code === "KeyD") playAudio(event);
  else if(event.code === "KeyF") playAudio(event);
  else if(event.code === "KeyG") playAudio(event);
  else if(event.code === "KeyH") playAudio(event);
  else if(event.code === "KeyJ") playAudio(event);
  else if(event.code === "KeyW") playAudio(event);
  else if(event.code === "KeyE") playAudio(event);
  else if(event.code === "KeyT") playAudio(event);
  else if(event.code === "KeyY") playAudio(event);
  else if(event.code === "KeyU") playAudio(event);
  else {
    console.log("UH..OH! Unexpected key pressed")
  }
});