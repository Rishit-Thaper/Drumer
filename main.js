function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // console.log(audio)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    // console.log(key)
    key.classList.add('playing')
    if(!audio) return; //stop the function
    audio.currentTime = 0;
    audio.play()
};
function playSound1(e){
    const audio = document.querySelector(`audio[data-key1="${e.keyCode}"]`)
    // console.log(audio)
    const key = document.querySelector(`.key[data-key1="${e.keyCode}"]`)
    // console.log(key)
    key.classList.add('playing')
    if(!audio) return; //stop the function
    audio.currentTime = 0;
    audio.play()
};
function removeTransition(e){
   if(e.propertyName !=='transform') return;

   this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key')
console.log(keys)
keys.forEach(key => key.addEventListener('transitionend',removeTransition))
window.addEventListener('keydown',playSound)
window.addEventListener('keydown',playSound1)