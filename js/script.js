window.addEventListener("load", () => {
    document.querySelector("#poglej-vec").addEventListener("click", () => {
        document.querySelector(".section-b.up").scrollIntoView({ behavior: 'smooth' })
    })

    const banner = document.getElementsByClassName('banner')[0];
    const blocks = document.getElementsByClassName('blocks')
    const text = document.getElementsByClassName('section-a-text')[0];
    generateBackground(banner, blocks);

    blocks[50].addEventListener("animationend", function () {
        text.style.opacity = "1"
        text.style.top = '50%'
        text.style.letterSpacing = '2px'

    }, false);
})


function generateBackground(banner, blocks) {

    for (let i = 0; i < 100; i++) {
        banner.innerHTML += `<div class='blocks'></div>`
        blocks[i].style.animationDelay = `${i * 0.05}s`;
    }
}









