//Navigation bar
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > navbar.offsetHeight + 150){
        navbar.classList.add('active')
    }
    else {
        navbar.classList.remove('active')
    }
}

//Expanding Cards for About Me Page
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


