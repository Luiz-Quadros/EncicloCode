const foto = document.querySelector('.perfilIcon');
let menu = document.querySelector('.dropDrown');

foto.addEventListener('click', () => {
    menu.style.display = (menu.style.display === "none") ? "block" : "none";
});