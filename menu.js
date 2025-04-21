document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuButton.addEventListener('click', function() {
        menuOverlay.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(event) {
        if (!menuOverlay.contains(event.target) && !menuButton.contains(event.target)) {
            menuOverlay.classList.remove('active');
            menuButton.classList.remove('active');
        }
    });
}); 