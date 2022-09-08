const openBtn = document.querySelector('#btn');
const closeBtn = document.querySelector('#popup_c_btn');
const alertPopup = document.querySelector('#popUp');
const alertShadow = document.querySelector('#section_shadow');


const clickCounter = document.querySelector('#kliknmb');


let clickBtnNumb = 0;
let browserStorage = JSON.parse(window.localStorage.getItem('click'));
let resetBtn = document.createElement('button');
let addButtonFlag = true;

openBtn.addEventListener('click', () => {
    alertPopup.classList.add('active');
    alertShadow.classList.add('active');
    clickBtnNumb++;
    window.localStorage.setItem('click', `${browserStorage}`);
    clickCounter.textContent = ++browserStorage;

    if (browserStorage >= 5) {
        if (addButtonFlag = true) {
            alertPopup.appendChild(resetBtn);
            resetBtn.textContent = "Reset Click Number";
            resetBtn.classList.add('popup_resetBtn');
            addButtonFlag = false;
        }
        resetBtn.addEventListener('click', () => {
            clickBtnNumb = 0;
            browserStorage = 0;
            window.localStorage.setItem('click', `${browserStorage}`);
            clickCounter.textContent = 0;
            alertPopup.removeChild(resetBtn);
        })


    };
});

closeBtn.addEventListener('click', closePopup);

alertShadow.addEventListener('click', closePopup);

function closePopup() {
    alertPopup.classList.remove('active');
    alertShadow.classList.remove('active');
}