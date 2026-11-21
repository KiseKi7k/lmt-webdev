var count = 0;

function updateCounter() {
    const counterText = document.getElementById("elementId"); // เเก้ไข
    counterText.textContent = count;
}

function reset() {
    //
}

function increment() {
    //
}

function decrement() {
    //
}

document.getElementById('id?')
    .addEventListener('submit', function (e) {
    e.preventDefault();
    const input = document.getElementById('form-input')
    const text = input.value;

    const formText = document.getElementById('id?'); // เเก้ไข
    formText.textContent = text;

    input.value = "";
})