function add() {
    let input = document.querySelector('#input');
    let name = input.value.trim();

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = name;
    let del = document.createElement('button');
    del.innerText = 'del';

    del.onclick = function () {
        li.remove();
    }
    li.appendChild(span);
    li.appendChild(del);
    document.querySelector('#List').appendChild(li);
    input.value = " ";

}
