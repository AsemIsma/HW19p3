const inputV = document.querySelector('#inputW');

document.querySelector("body").addEventListener('click', (word) => {
    word = String(inputV.value);

    document.querySelector('h2').innerHTML = word.length;
})