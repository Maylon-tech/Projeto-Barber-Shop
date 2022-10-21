const btnUp = document.querySelector(".scroll-btn")
btnUp.addEventListener("click", () => {
    window.scrollTo(0,0)
})
function hide() {
    if(window.scrollY > 10) {
        btnUp.style.opacity = 1
    } else {
        btnUp.style.opacity = 0
    }
}
document.addEventListener("scroll", hide)

