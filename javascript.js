const card = document.querySelector('.card-inner');
const flipButton = document.getElementById('flip-button');
const button_two= document.getElementById('newentry');

flipButton.addEventListener('click', () => {
    card.style.transform = 'rotateY(180deg)';
});
button_two.addEventListener('click', () => {
    card.style.transform = 'rotateY(0deg)';
});
