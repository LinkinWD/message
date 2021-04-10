const { hash } = window.location

const message =atob(hash.replace('#', ''))



const form = document.querySelector('form')
const input = document.querySelector('#maininput')
const linkInput = document.querySelector('#link-input')
const linkForm = document.querySelector('#link-form')
const messageForm = document.querySelector('#message-form')
const messageShow = document.querySelector('#message-show')

if(message) {
    messageForm.classList.add('hide')
    messageShow.classList.remove('hide')

    document.querySelector('h1').innerHTML = message
}

form.addEventListener('submit', e => {
    e.preventDefault()
    messageForm.classList.add('hide')
    linkForm.classList.remove('hide')
    
    const encrypted = btoa(input.value)

    linkInput.value = `${window.location}#${encrypted}`
    linkInput.select()
    
})