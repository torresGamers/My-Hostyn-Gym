let video = document.getElementById('video');
let boton = document.getElementById('boton');

function playVideo(){
    video.play();
    boton.style.display= 'none'
}

video.addEventListener('ended',function(){
    boton.style.display = 'block'
})
function menu(){
    let menu = document.getElementById('imagen');
    let intro = document.getElementById('intro');

    menu.addEventListener('click',function(){
        let logo = document.getElementById('menu-logo');
        logo.style.display = 'block';   

    })
    intro.addEventListener('click',function(){
        let logo = document.getElementById('menu-logo');

        logo.style.display = 'none'
    })
    
}
menu()
