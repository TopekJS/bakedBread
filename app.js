let slidersImage = document.querySelectorAll('.slide'),
    prevImg = document.querySelector('#prevImg'),
    nextImg = document.querySelector('#nextImg'),
    cakeName = document.querySelector('#cakeName'),
    map = document.querySelector('#map'),
    price = document.querySelector('#price'),
    current = 0,
    lopp = 0,
    navbar = document.getElementById('navbar');

//navbar toggle 
navbar.addEventListener('click', navRes);
function navRes() {
    let Ul = document.querySelector('ul'),
        Header = document.querySelector('header');
    Ul.classList.toggle('navUlPlay');
    Header.classList.toggle('headerBack')
}

//clear all images
function reset(){
    for (let i = 0; i < slidersImage.length; i++) {
        slidersImage[i].style.display = "none";
    }
}

//init slider
function startSlide() {
    reset();
    slidersImage[0].style.display = "block";
}

//show prev
function showPrev() {
    reset();
    slidersImage[current - 1].style.display = "block";
    current--;
}

//show next
function showNext() {
    reset();
    slidersImage[current + 1].style.display = "block";
    current++;
}

//left arrow click
prevImg.addEventListener('click', function () {
    if(current === 0){
        current = slidersImage.length;
        }
        showPrev();
        minus();
});

//click next
nextImg.addEventListener('click', function () {
    if(current === slidersImage.length - 1){
        current = -1;
    }
    showNext();
    plus();
});

startSlide();

function minus() {
    if (lopp <= 0) {
        lopp = 3;
    }
  return listMenu(lopp -= 1) 
}

function plus() {
    if (lopp >= 2) {
        lopp = -1;
    }
  return listMenu(lopp += 1)
}


function listMenu(key) {
    switch (key) {
        case 0:
            cakeName.textContent = menu[0].nama;
            price.textContent = menu[0].harga;
            map.innerHTML = menu[0].lokasi;
            break;
        case 1:
            cakeName.textContent = menu[1].nama;
            price.textContent = menu[1].harga;
            map.innerHTML = menu[1].lokasi;
            break;
        case 2:
            cakeName.textContent = menu[2].nama;
            price.textContent = menu[2].harga;
            map.innerHTML = menu[2].lokasi;
            break;
        default:
            console.log('amiin');
            break;
    }
}
const menu = [
    {
        nama: "Baked bread for brackfast",
        harga: '$7.4',
        lokasi: `Sirotolmustakim Street - <b>45Min</b>`
    },
    {
        nama: "Baguette on white surface",
        harga: '$6.8',
        lokasi: `MakamKramat Street - <b>17Min</b>`
    },
    {
        nama: "Round bread or bolang-baling",
        harga: '$9.3',
        lokasi: `TanpaUjung Street - <b>32Min</b>`
    }
]