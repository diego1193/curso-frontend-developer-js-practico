const menuEmail = document.querySelector('.navbar-email')
const desktoMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    //desktoMenu.style.display = "block";
    desktoMenu.classList.toggle("inactive") // Quita y pone un elemento (de los estilos) q hayamos colocado en style.css

}

/*
// Desparece si colocamos el mause afuera del div
desktoMenu.addEventListener("mouseover", ()=>{
    desktoMenu.style.display = "block";
})

desktoMenu.addEventListener("mouseout", ()=>{
    desktoMenu.style.display = "none";
})*/

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive") // Quita y pone un elemento (de los estilos) q hayamos colocado en style.css
}