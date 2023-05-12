const menuEmail = document.querySelector('.navbar-email')
const desktoMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener("click", toggleDesktopMenu);

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