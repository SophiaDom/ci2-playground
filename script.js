const tasks =
    [
        {
            "title": "Learn HTML",
            "img": 'html.webp',
            "completed": true
        },
        {
            "title": "Learn CSS",
            "img": 'css.webp',
            "completed": true
        },
        {
            "title": "Learn Javascript",
            "img": 'js.webp',
            "completed": true
        },
        {
            "title": "Learn Figma",
            "img": 'figma.png',
            "completed": true
        },
        {
            "title": "Learn p5",
            "img": 'p5.png',
            "completed": false
        }
    ]


document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskElement = document.createElement('div');
        const toolbox = document.querySelector('#toolbox');

        taskElement.className = 'task';

        if (task.completed) {
            taskElement.className += ' completed';
        }

        taskElement.addEventListener('click', function () {
            taskElement.classList.toggle('completed');
        });

        const img = document.createElement('img');
        img.src = 'img/' + task.img;
        img.alt = task.title;

        taskElement.textContent = task.title;
        taskElement.appendChild(img);


        toolbox.appendChild(taskElement);
    }
});