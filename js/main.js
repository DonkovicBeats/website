const trigger = document.querySelector('#title');
const target = document.querySelector('#pic');

const countTrigger = document.querySelector('#pic')
let counter = 0;



function activateBlur() {
    target.classList.add('blurActive');
}
function deactivateBlur() {
    target.classList.remove('blurActive');
}


trigger.addEventListener('mouseenter', activateBlur);
trigger.addEventListener('mouseleave', deactivateBlur);

countTrigger.addEventListener('click', countUp);

function countUp() {
    counter++;
    document.querySelector('#counter').innerHTML = counter;
}