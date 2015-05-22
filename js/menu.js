var header = document.querySelector('.main-header'),
    btnMenu = document.getElementById('main-header-btn');

btnMenu.addEventListener('click', function(){
    header.classList.toggle('main-header--opened');
});
