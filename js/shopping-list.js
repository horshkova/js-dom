const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', buttonClick);

function buttonClick() {
    const currentValue = input.value;
    input.value = '';
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const span = document.createElement('span');
    li.appendChild(span);
    li.appendChild(deleteButton);
    span.textContent = currentValue;
    deleteButton.textContent = 'Delete';
    list.appendChild(li);
    deleteButton.addEventListener('click', deleteClick);
    input.focus();
}

function deleteClick(event) {
    const buttonPressed = event.target;
    const li = buttonPressed.parentElement;
    li.parentNode.removeChild(li);
}
