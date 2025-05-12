const tasks =
    [
        {
            "title": "Learn HTML",
            "page": "html.html",
            "category": ["web"],
            "img": 'html.webp',
            "time": 1,
            "completed": true,
            "color": 'red'
        },
        {
            "title": "Learn CSS + Drink Water",
            "page": "css.html",
            "img": 'css.webp',
            "category": ["web"],
            "time": 5,
            "completed": true
        },
        {
            "title": "Learn Javascript",
            "page": "javascript.html",
            "img": 'js.webp',
            "category": ["web"],
            "time": 10,
            "completed": true
        },
        {
            "title": "Learn Figma",
            "img": 'figma.png',
            "category": ["web", "design"],
            "time": 20,
            "completed": false
        },
        {
            "title": "Learn p5",
            "img": 'p5.png',
            "category": ["web", "design"],
            "time": 15,
            "completed": false
        },
        {
            "title": "Learn how to make fried rice",
            "category": ["food"],
            "time": 15,
            "completed": false
        }
    ]
    
const filters = {
    completed: document.querySelector('#completed-filter'),
    time: document.querySelector('#time-filter'),
    timeValue: document.querySelector('output[for="time-filter"]')
};
const toolbox = document.querySelector('#toolbox');

function generateTask(task) {

    let imgBox = ''
    if (task.img){
        imgBox = `<img src="./img/${task.img}" alt="${task.title}">`
    }
    toolbox.innerHTML = 
`
<div class="task">
<h1>${task.title}</h1>
${task.img ? `<img src="./img/${task.img}">`' : ''}
<img src="./img/${task.img}" alt="${task.title}">
<p>Time: ${task.time} hours</p>
$
</div>
`
}



for(let task = 0; task < tasks.length; task++) {
    generateTask(tasks[task]);
}

tasks.forEach(item => [
    gererateTask(item);
])

// generateTask(tasks[0]);
// generateTask(tasks[1]);
// generateTask(tasks[2]);
// generateTask(tasks[3]);

// let showCategory = 'all';
// let minTime = 0;

// function generateTask(task) {
//     return `
        <div class="task ${task.completed ? 'completed' : ''}" onclick="toggleCompleted(this)">
            ${task.img ? `<img src="img/${task.img}" alt="${task.title}">` : ''}
            <p>${task.title} - ${task.time} hours</p>
            ${task.category ? task.category.map(tag => `<span>${tag}</span>`).join('') : ''}
            ${task.page ? `<a href="./pages/${task.page}">Learn more</a>` : ''}
        </div>
    `;
}


function renderTasks() {
    const filteredTasks = tasks.filter(task => {
        const condition = showCategory === 'all' ||
            (showCategory === 'completed' && task.completed) ||
            (showCategory === 'incomplete' && !task.completed);
        return task.time >= minTime && condition;
    });

    toolbox.innerHTML = ''

    filteredTasks.forEach(task => {
        toolbox.innerHTML += generateTask(task);
    });
}

function toggleCompleted(element) {
    element.classList.toggle('completed');
}

function handleCompletedFilterChange() {
    showCategory = filters.completed.value;
    renderTasks();
}

function handleTimeFilterChange() {
    filters.timeValue.textContent = filters.time.value;
    minTime = filters.time.value;
    renderTasks();
}

function initializeEventListeners() {
    filters.completed.addEventListener('change', handleCompletedFilterChange);
    filters.time.addEventListener('input', handleTimeFilterChange);
}

initializeEventListeners();
renderTasks();
