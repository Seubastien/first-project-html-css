const burger = document.querySelector(".burger")
const barNav = document.querySelector(".bar-nav")
const barNavUl = document.querySelector(".bar-nav-ul")
const main = document.querySelector("main")


burger.addEventListener('click', () => {
    burger.style.display = 'none'
    barNavUl.style.flexDirection = 'column'
    barNavUl.style.alignItems = 'center'
    barNav.style.display = 'flex'
    barNav.style.position = 'absolute'
    barNav.style.right = '-200px'
    barNav.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    barNav.style.borderRadius = "10px"
    barNav.style.transform = 'translate(-200px)'


    let background = document.createElement('div')
    background.classList.add('backgroundDim')
    document.querySelector('body').appendChild(background)
    background.addEventListener('click', () => {
        background.remove()
        burger.style.display = 'block'
        barNav.style.display = 'none'
    })
})
