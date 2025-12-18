const trigger = document.querySelector('#title');
const target = document.querySelector('#pic');

function activateBlur() {
    target.classList.add('blurActive');
}
function deactivateBlur() {
    target.classList.remove('blurActive');
}


trigger.addEventListener('mouseenter', activateBlur);


trigger.addEventListener('mouseleave', deactivateBlur);
