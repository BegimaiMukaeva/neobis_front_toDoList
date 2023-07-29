document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoNameInput = document.getElementById('todo-name');
    const todoList = document.getElementById('todo-list');
    let selectedCategory = null;

    const businessRadio = document.getElementById('business-radio');
    const personalRadio = document.getElementById('personal-radio');

    businessRadio.addEventListener('change', function () {
        selectedCategory = 'Business';
        updateRadioColor();
    })

    personalRadio.addEventListener('change', function () {
        selectedCategory = 'Personal'
        updateRadioColor();
    })

    function updateRadioColor() {
        businessRadio.style.borderColor = selectedCategory === 'Business' ? '#2a82ee' : '#000';
        personalRadio.style.borderColor = selectedCategory === 'Personal' ? '#ef0fe4' : '#000';
    }

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const todoName = todoNameInput.value.trim();
        if (todoName !== ''){
            addTaskToList(todoName, selectedCategory);
            todoNameInput.value = '';
        }
    });


    function addTaskToList(todoName, category) {
        const todoItem = document.createElement('li');

        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoName;
        todoSpan.contentEditable = false;
        todoSpan.addEventListener('keydown',function (event) {
            if (event.key === 'Enter'){
                event.preventDefault();
                todoSpan.blur();
                if (todoSpan.textContent.trim() === ''){
                    todoItem.remove();
                }
            }
        });
        todoItem.appendChild(todoSpan);

        addToggleButton(todoItem, category);
        addEditButton(todoItem);
        addDeleteButton(todoItem);
        todoList.appendChild(todoItem);

        selectedCategory = null;
        businessRadio.checked = false;
        personalRadio.checked = false;
        updateRadioColor();
    }

    function addToggleButton(todoItem, category) {
        const toggleButton = document.createElement('input');
        toggleButton.type = 'checkbox';
        toggleButton.dataset.category = category;
        todoItem.insertBefore(toggleButton, todoItem.firstChild);
        toggleButton.addEventListener('change',function () {
            const todoSpan = todoItem.querySelector('span');
            if (toggleButton.checked){
                todoSpan.style.textDecoration = 'line-through';
            }else {
                todoSpan.style.textDecoration = 'none';
            }
        });
    }

    function addEditButton(todoItem) {
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        todoItem.appendChild(editButton);

        editButton.addEventListener('click', function () {
            todoItem.classList.toggle('editing');
            const todoSpan = todoItem.querySelector('span');
            if (todoItem.classList.contains('editing')){
                todoSpan.contentEditable = true;
                todoSpan.classList.add('editing');
                todoSpan.focus();
                placeCaretAtEnd(todoSpan);
            } else {
                todoSpan.contentEditable = false;
                todoSpan.classList.remove('editing');
            }
        });
    }

    function addDeleteButton(todoItem) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        todoItem.appendChild(deleteButton);

        deleteButton.addEventListener('click', function () {
            todoItem.remove();
        })
    }

    function placeCaretAtEnd(element) {
        element.focus();
        const range = document.createRange();
        range.selectNodeContents(element);
        range.collapse(false);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
})