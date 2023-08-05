document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput')
    const addTaskBtn = document.getElementById('addTaskBtn')
    const taskList = document.getElementById('taskList')
    const deleteButton =
        document.getElementById('deleteButton')
    const scrollToTopBtn = document.querySelector(
        '.scroll-to-top',
    )

    // Відслідковуємо подію прокрутки сторінки
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            // З'являємо кнопку "up to scroll" при прокрутці на відстань 200px від верху
            scrollToTopBtn.style.display = 'block'
        } else {
            scrollToTopBtn.style.display = 'none'
        }
    })

    function loadTasks() {
        const tasks =
            JSON.parse(localStorage.getItem('tasks')) || []
        tasks.forEach((task) => {
            createTaskItem(task)
        })
    }

    function addTask() {
        const taskText = taskInput.value.trim()
        if (taskText !== '') {
            createTaskItem(taskText)
            taskInput.value = ''
            saveTasksToLocalStorage()
        }
    }

    function createTaskItem(text) {
        const taskItem = document.createElement('li')
        taskItem.classList.add('todo-app__task-item')

        const taskTextElement = document.createElement('span')
        taskTextElement.textContent = text

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('todo-app__delete-button')

        const trashIcon = document.createElement('span')
        trashIcon.classList.add('todo-app__trash-icon')
        deleteButton.appendChild(trashIcon)

        taskItem.appendChild(taskTextElement)
        taskItem.appendChild(deleteButton)

        taskList.appendChild(taskItem)

        deleteButton.addEventListener('click', () => {
            deleteTask(taskItem)
        })
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem)
        saveTasksToLocalStorage()
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(taskList.children).map(
            (taskItem) => taskItem.firstChild.textContent,
        )
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    addTaskBtn.addEventListener('click', addTask)
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask()
        }
    })

    deleteButton.addEventListener('click', () => {
        const allTasks = document.querySelectorAll(
            '.todo-app__task-item',
        )
        allTasks.forEach((taskItem) => {
            if (taskItem.classList.contains('selected')) {
                deleteTask(taskItem)
            }
        })
    })

    taskList.addEventListener('click', (event) => {
        const clickedElement = event.target
        if (
            clickedElement.classList.contains(
                'todo-app__delete-button',
            )
        ) {
            const taskItem = clickedElement.parentNode
            deleteTask(taskItem)
        } else if (
            clickedElement.classList.contains(
                'todo-app__task-item',
            )
        ) {
            clickedElement.classList.toggle('selected')
        }
    })

    // Логіка для кнопки "up to scroll"
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

    loadTasks()
})
