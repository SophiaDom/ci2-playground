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

function generateTask(task) {
    document.body.innerHTML += `
        <div class="task ${task.completed ? 'completed' : ''}" onclick="toggleCompleted(this)">
            ${task.img ? `<img src="../img/${task.img}" alt="${task.title}">` : ''}
            <p>${task.title} - ${task.time} hours</p>
            ${task.category ? task.category.map(tag => `<span>${tag}</span>`).join('') : ''}
            ${task.page ? `<a href="./pages/${task.page}">Learn more</a>` : ''}
        </div>
    `;
}

fetch('./nav.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('nav').innerHTML = html;
    })
    .catch(error => console.error('Error fetching navigation:', error))

document.querySelector('nav a').style.background = 'blue';