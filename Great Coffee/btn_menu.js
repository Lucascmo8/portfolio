const menu_btn = document.getElementById('menu_mobile');

function togglemenu(){
    const menu_mb = document.getElementById('menu');
    const icon_menu = document.getElementById('menu_mobile')
    menu.classList.toggle('active');
    menu_mobile.classList.toggle('active')
}

menu_btn.addEventListener('click', togglemenu)