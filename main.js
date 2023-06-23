const tasks = []
const ulElement = document.querySelector('#tasks ul')

function remTask(index) {
  tasks.splice(index, 1)
  const taskElement = document.querySelector(`#tasks li#item-${index}`)
  ulElement.removeChild(taskElement)
}

function addTask(text) {
  const total = tasks.push(text)
  const index = total - 1

  const taskElement = document.createElement('li')
  const textlement = document.createElement('span')
  const btnElement = document.createElement('button')

  taskElement.setAttribute('id', `item-${index}`)

  btnElement.onclick = () => remTask(index)

  taskElement.appendChild(textlement)
  taskElement.appendChild(btnElement)

  textlement.innerHTML = text
  btnElement.innerHTML = 'Remover'

  ulElement.appendChild(taskElement)
}

const btnElement = document.querySelector('#form button')
const inputElement = document.querySelector('#form input')

btnElement.onclick = () => {
  if (inputElement.value) {
    addTask(inputElement.value)
    inputElement.value = ''
  }
}