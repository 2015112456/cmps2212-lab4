// exercise1.js
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', function (event) {
    const trigger = event.target.closest('.accordion-trigger');
    if (!trigger) {
        return;
    }

    const closest = trigger.closest('.accordion-item');
    if(!closest) {
        return;
    }

    const isOpen = closest.classList.contains('open');
    if(isOpen) {
        closest.classList.remove('open');
        return;
    }

    const items = accordion.querySelectorAll('.accordion-item');
    items.forEach(function (item) {
        item.classList.remove('open');
    });
    
    closest.classList.add('open');
});
