const cart = []


const span = document.getElementById("myspan")

const button = document.getElementsByClassName('hero-btn add-to-cart')

button[0].addEventListener('click', () => {
    cart.push('coffee')
    span.textContent = cart.length;
})
