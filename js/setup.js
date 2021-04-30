$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const hamburguerButton = document.querySelector('[data-hamburguer]')
const hamburguerMenu = document.querySelector('[data-menu]')

toggleMenu = () =>{hamburguerMenu.classList.toggle('active-menu')}
hamburguerButton.addEventListener('click',toggleMenu)
