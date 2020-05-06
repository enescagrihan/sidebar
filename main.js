const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0px';
})

const modalBtn = document.getElementById('modal-btn');
const popUp = document.getElementById('modal-bg');
const modalClose = document.getElementById('modal-close');

modalBtn.addEventListener('click', () => {
    popUp.style.visibility = 'visible';
})

modalClose.addEventListener('click', () => {
    popUp.style.visibility = 'hidden';
})
