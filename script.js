// script.js (robust, defensive)
function add() {
    const input = document.querySelector('#input');
    const name = input.value.trim();
    if (!name) return; // ignore empty submissions

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = name;

    const del = document.createElement('button');
    del.innerText = 'del';
    del.addEventListener('click', () => li.remove());

    li.appendChild(span);
    li.appendChild(del);
    document.querySelector('#List').appendChild(li);

    input.value = ""; // clear properly
}
// ensure global exposure in all environments
window.add = add;
