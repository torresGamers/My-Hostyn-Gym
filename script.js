let video = document.getElementById('video');
let boton = document.getElementById('boton');

function playVideo(){
    video.play();
    boton.style.display= 'none'
}

video.addEventListener('ended',function(){
    boton.style.display = 'block'
})