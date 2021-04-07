const HAM = document.getElementById('ham-');
const BURGER = document.getElementById('-burger');
const linksWrapper = document.getElementById('linksWrap');

HAM.addEventListener('click', onClick);

function onClick() {
    HAM.classList.toggle('active');

    linksWrapper.classList.toggle('fade');
}

    // if (linksWrapper.style.visibility === 'hidden'){
    //     linksWrapper.style.visibility = 'visible';
    // }
    // else {
    //     linksWrapper.style.visibility = 'hidden';
    // }

