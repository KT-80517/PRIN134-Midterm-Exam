const petbutton = document.querySelectorAll('.btn-full');
const cards = document.querySelectorAll('.card');
const banner = document.querySelector('.banner-content');
const btnSelectAll = document.querySelector('#btn-select-all');
const btnUnselectAll = document.querySelector('#btn-unselect-all');
const btnSelectFirst = document.querySelector('#btn-select-first');
const btnSelectLast = document.querySelector('#btn-select-last');
const btnSelectPrevious = document.querySelector('#btn-select-previous');
const btnSelectNext = document.querySelector('#btn-select-next');

function UpdateSelectedCard(index) {
    cards.forEach(card => card.classList.remove('active', 'card-selected'));
    cards[index].classList.add('active', 'card-selected');
    currentIndex = index;
}

UpdateSelectedCard(0);


banner.addEventListener('click', () => {
    banner.classList.add('animate__animated', 'animate__bounce');

    banner.addEventListener('animationend', () => {
        banner.classList.remove('animate__animated', 'animate__bounce');
    });
}); 

petbutton.forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-solid');
        icon.classList.toggle('fa-regular');
    });
});

btnSelectAll.addEventListener('click', () => {
    petbutton.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.add('fa-solid');
        icon.classList.remove('fa-regular');
    });
});

btnUnselectAll.addEventListener('click', () => {
    petbutton.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
});

btnSelectFirst.addEventListener('click', () => {
    UpdateSelectedCard(0);
});

btnSelectLast.addEventListener('click', () => {
    UpdateSelectedCard(cards.length - 1);
});

btnSelectPrevious.addEventListener('click', () => {
     const newIndex = currentIndex > 0 ? currentIndex -1 : cards.length -1;
     UpdateSelectedCard(newIndex);
});

btnSelectNext.addEventListener('click', () => {
    const newIndex = currentIndex < cards.length -1 ? currentIndex + 1:0;
    UpdateSelectedCard(newIndex);
});