//menu responsive code

document.addEventListener("DOMContentLoaded", function(event){
    var menu = document.querySelector('.menu');
    var menu_toggle = document.querySelector('.menu_toggle');
    console.log('test');
        menu_toggle.addEventListener('click', function(){
           menu_toggle.classList.toggle('active');
           menu.classList.toggle('responsive');
           
        });
})

//site animation

const header = document.querySelector('header');
const title_span = document.querySelectorAll('.left h1 span');
const p = document.querySelector('.left p');
const a = document.querySelector('.left a');

window.addEventListener('load',()=>{

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(header , 2 ,{y:-100 , opacity:0, ease: "power2.out"}, 0,1)
    .staggerFrom(title_span , 1 ,{opacity:0, ease: "power2.out"}, 0,2)
    .staggerFrom(p , 1 ,{opacity:0, ease: "power2.out"}, 0,2)
    .staggerFrom(a , 1 ,{opacity:0, ease: "power2.out"}, 0,3)


    TL.play()

  })


