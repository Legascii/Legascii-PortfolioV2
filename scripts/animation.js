// Others
gsap.to('.scroll-wheel', {
    y: 15,
    duration: 1.7,
    ease: 'power3.out',
    repeat: -1,
    opacity: 0,
    delay: .5
})

// Opening
const tl = gsap.timeline()

tl.set(document.body, {overflow: 'hidden'})

tl.to('.text', {
    y: '0%',
    duration: 1,
    ease: 'back.out(1.5)',
    stagger: .45,
    delay: .5
})

tl.to('.text', {
    y: '100%',
    duration: .5,
    ease: 'power3.in',
    delay: 1.2,
    stagger: .45
})

tl.to('.slider', {
    x: '-100%',
    duration: 1.5,
    delay: .5 
})
.set(document.body, {overflow: 'auto'})

tl.to('.landing', {
    x: '-100%',
    duration: 1,
    ease: 'power3.in'
}, '-=1.8')

const closeMenu = document.getElementById('close')
const openMenu = document.getElementById('open')

openMenu.addEventListener('click', () => {
    gsap.to(nav, {
        x: '0%',
        duration: 1.35,
        ease: 'power3.out',
        opacity: 1
    })
})

closeMenu.addEventListener('click', () => {
    gsap.to(nav, {
        x: '100%',
        duration: 1.2,
        ease: 'power1.in',
        opacity: 0
    })
})