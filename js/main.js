const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const exit = document.getElementById('exit');

let minister = document.getElementById('minister-tab');
let ministry = document.getElementById('ministry-tab');


menu.addEventListener('click', function (e) {
    nav.classList.toggle('hide-mobile');
    e.preventDefault()
})
exit.addEventListener('click', function (e) {
    nav.classList.add('hide-mobile');
    e.preventDefault()
})

// Togle the display of the Minister and Ministries twitter handles
function display(option) {
    if (option == 'minister') {
        console.log(minister);

        minister.style.display = 'block';
        ministry.style.display = 'none';
    } else {
        console.log(ministry);

        ministry.style.display = 'block';
        minister.style.display = 'none';
    }

}