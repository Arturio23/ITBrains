document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list')
    const todoInput = document.getElementById('todo-input')
    const addButton = document.getElementById('add-button')

    // Get tasks from local storage or initialize an empty array
    let tasks =
        JSON.parse(localStorage.getItem('tasks')) || []

    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    function renderTasks() {
        todoList.innerHTML = ''
        tasks.forEach((task, index) => {
            const li = document.createElement('li')
            li.classList.add('todo-app__task')
            li.innerHTML = `
                <div class="todo-app__task-text ${
                  task.completed
                    ? 'todo-app__task-text--completed'
                    : ''
                }">${task.text}</div>
                <button class="todo-app__delete-button">Delete</button>
                <button class="todo-app__complete-button">${
                  task.completed ? 's' : 's'
                }</button>
            `

            // Delete button event handler
            li.querySelector(
                '.todo-app__delete-button',
            ).addEventListener('click', () => {
                tasks.splice(index, 1)
                saveTasksToLocalStorage()
                renderTasks()
            })

            // Complete button event handler
            li.querySelector(
                '.todo-app__complete-button',
            ).addEventListener('click', () => {
                task.completed = !task.completed
                saveTasksToLocalStorage()
                renderTasks()
            })

            todoList.appendChild(li)
        })
    }

    // Add button event handler
    addButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if (taskText !== '') {
            tasks.push({
                text: taskText,
                completed: false,
            })
            todoInput.value = ''
            saveTasksToLocalStorage()
            renderTasks()
        }
    })

    renderTasks()
})
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.querySelector(
        '.scroll-to-top',
    )

    // Show/hide the "scroll-to-top" button on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollToTopBtn.style.display = 'block'
        } else {
            scrollToTopBtn.style.display = 'none'
        }
    })

    // Scroll to top when the button is clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
})