const nav = document.querySelector('.navbar');
window.addEventListener('scroll',function(params) {
    nav.classList.toggle('active',this.window.scrollY > 0)
})
