const taskInputTxt = document.querySelector('#task-input-txt')
const timeBtn = document.querySelector('#time-btn')
const datetimeInput = document.querySelector('#datetime-input')
const addBtn = document.querySelector('#add-btn')
let taskContainer = document.querySelector('.task-container')
let count = 0

const localStorageKey = 'todo-app'

function toggleCompletedTask(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey))
    let index = values.findIndex(x => x.id == data)
    if (!values[index].isCompleted) {
        values[index].isCompleted = 'checked'
    } else {
        values[index].isCompleted = ''
    }
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

function removeTask(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey))
    let index = values.findIndex(x => x.id == data)
    values.splice(index, 1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues()
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    let list = document.querySelector('.task-container')
    list.innerHTML = ''

    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `
            <div div class="task-wrapper" id = "task-wrapper-${values[i]['id']}" >
                <div class="task-wrapper-inner">
                    <input type="checkbox" name="task-input-chk" id="task-input-chk-${values[i]['id']}" onclick='toggleCompletedTask(${values[i]['id']})' ${values[i]['isCompleted']}>
                    <p id="task-${values[i]['id']}">${values[i]['name']}</p>
                </div>
                <div class="task-wrapper-inner">
                    <p id="time-${values[i]['id']}">${values[i]['date']}</p>
                    <button type="button" id="trash-${values[i]['id']}" class="trash-btn" onclick='removeTask(${values[i]['id']})'>
                        <span><i class="fa-regular fa-trash-can"></i></span>
                    </button>
                </div>
            </div>
        `
    }
}

function formatAMPM() {
    let date = new Date()
    let hours = date.getHours() + 12
    hours = hours >= 24 ? (hours - 24) : hours
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    let strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
}

addBtn.addEventListener('click', () => {
    if (!taskInputTxt.value) {
        alert('Você não informou nenhuma tarefa, tente novamente!')
    } else {
        let completed = ''
        let date = formatAMPM()

        console.log(date)

        let values = JSON.parse(localStorage.getItem(localStorageKey) || '[]')

        if (!values.length) {
            count = 1
            console.log('array vazio', count, values.length)
        } else {
            count = values[values.length - 1].id + 1
        }

        values.push({
            id: count,
            name: taskInputTxt.value,
            date: date,
            isCompleted: completed
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
        taskInputTxt.value = ''
    }
})

// timeBtn.addEventListener('click', () => {
//     datetimeInput.style.display = 'block';
// });

window.addEventListener('DOMContentLoaded', () => {
    showValues()
})