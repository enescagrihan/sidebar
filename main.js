const sidebar = document.getElementById('sidebar');

document.getElementById('open-btn').addEventListener('click', () => {
    sidebar.style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', () => {
    sidebar.style.width = '0px';
})