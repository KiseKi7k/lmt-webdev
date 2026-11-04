var count = 0;

function updateCounter() {
    const counterText = document.getElementById("counter-text");
    counterText.textContent = count;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

document.getElementById('text-form').addEventListener('submit', function (ev) {
    ev.preventDefault();
    const input = document.getElementById('form-input')
    const text = input.value;

    if (!text) return;

    const formText = document.getElementById('form-text');
    formText.textContent = text;

    input.value = "";
})