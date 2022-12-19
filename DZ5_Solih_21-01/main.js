const input = document.getElementById('input')
const createButton = document.getElementById('create_todo')
const todoList = document.getElementById('todo_list')


const createTodo = function () {
    if(input.value.trim() === ''){
        return false
    }else {
        const div = document.createElement('div')
        const buttons_block = document.createElement('div')
        const text = document.createElement('h3')
        const del = document.createElement('button')
        const edit = document.createElement('button')

        div.setAttribute('class', 'block_text')
        buttons_block.setAttribute('class', 'buttons_block')
        del.setAttribute('class', 'btn')
        edit.setAttribute('class', 'btn')
        text.setAttribute('class', 'text')

        text.innerText = input.value
        del.innerText = 'Delete'
        edit.innerText = 'Edit'
        div.append(text, buttons_block)
        buttons_block.append(edit, del)

        todoList.append(div)

        del.onclick = () => div.remove()

        edit.onclick = () => {
            let editTxt = prompt(`Edit this: ${text.innerText}`).trim()
            editTxt === '' ? text.innerText : text.innerText = editTxt
        }
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)





