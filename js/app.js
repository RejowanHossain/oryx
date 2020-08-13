var ham = document.getElementById('ham');
var list = document.getElementById('list');
ham.addEventListener('click', function () {
    if (list.classList == 'responsive-list') {
        list.classList.add('tog');
    } else {
        list.classList.remove('tog');
    }
})