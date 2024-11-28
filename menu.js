
const menuButton = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuButton.addEventListener('click', function() {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});


window.addEventListener('click', function(event) {
    if (!event.target.matches('#menu-btn') && !event.target.closest('.dropdown')) {
        dropdownMenu.style.display = 'none';
    }
});
