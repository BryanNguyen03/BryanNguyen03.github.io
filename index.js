//Navigation bar
const navbar = document.querySelector('.navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > navbar.offsetHeight + 150){
        navbar.classList.add('active')
        iconsOnWhite()
    }
    else {
        navbar.classList.remove('active')
        iconsOnBlack()
    }
}

//Functions for changing github and linkedin Icon whenever nav bar is active
function iconsOnWhite() {
    document.getElementById("gitIcon").src = "images/githubIcon.png"
    document.getElementById("linkedinIcon").src = "images/LinkedinIcon.png"
}

function iconsOnBlack() {
    document.getElementById("gitIcon").src = "images/githubOnWhite.png"
    document.getElementById("linkedinIcon").src = "images/linkedinOnWhite.png"
}

//Expanding Cards for projects page
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

