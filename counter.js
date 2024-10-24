const countElement = document.getElementById('count');
const decrementButton = document.getElementById('decrement-btn');
const incrementButton = document.getElementById('increment-btn');
const resetButton = document.getElementById('reset-btn');

let count = 0;

function updateCount() {
    countElement.textContent = count;
    if (count > 0) {
        countElement.style.color = 'green'; 
    } else if (count < 0) {
        countElement.style.color = 'red'; 
    } else {
        countElement.style.color = 'black'; 
    }
}


decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});


incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});


resetButton.addEventListener('click', () => {
    count = 0;
    updateCount();
});


updateCount();