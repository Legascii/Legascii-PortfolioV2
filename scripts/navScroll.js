const nav = document.querySelector('nav')
const scrollIndicator = document.getElementById('scrollSecondary')

function reSlide(x) {
    if (x.matches) { // If media query matches
        gsap.to(nav, {
            x: '0',
            duration: 2
        })
    } else {
        gsap.to(nav, {
            x: '100%',
            duration: 1
        })
    }
}

function reset() {
    if (x.matches) {
        gsap.to(nav, {
            x: '0',
            duration: 1
        })
    } else {
        reSlide(x)
    }
}

const x = window.matchMedia("(min-width: 600px)")
reSlide(x)
x.addEventListener('change', () => {
    reSlide(x)
})

const scrollBtns = document.querySelectorAll(".nav-item button");
scrollBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
        let section = btn.getAttribute("data-section");
        let sectionEl = document.querySelector(`#${section}`);
        sectionEl.scrollIntoView()
        reset()
    })
});

scrollIndicator.addEventListener('click', () => {
    window.scrollTo(0, 535)
})