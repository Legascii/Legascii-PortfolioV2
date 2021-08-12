const message = document.getElementById('message')
const email = document.getElementById('email')
const names = document.getElementById('name')
const submitBtn = document.getElementById('submitBtn')
const errorName = document.getElementById('error-name')
const errorEmail = document.getElementById('error-email')
const errorMessages = document.getElementById('error-message')

submitBtn.addEventListener('click', (e) => {
    let messageName = []
    let messageEmail = []
    let MessageMessages = []

    if (names.value === '' || names.value == null) {
        messageName.push('*Required')
    }

    if (message.value === '' || message.value == null || message.value.length < 2) {
        MessageMessages.push('*Required')
    }

    if (message.value.includes('<script>') || message.value.includes('<img') || names.value.includes('<script>') || names.value.includes('<img')) {
        message.push('*No malicious code!')
    }

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailFormat)) {
        if (email.value === '' || email.value == null) {
            messageEmail.push('*Required')
        } else {
            messageEmail.push('*Incorrect')
        }
    }
    

    if (messageName.length > 0 || messageEmail.length > 0 || MessageMessages.length > 0) {
        e.preventDefault()
        errorName.innerText = messageName
        errorEmail.innerText = messageEmail
        errorMessages.innerText = MessageMessages
    } else {
        errorName.innerText = ''
        errorEmail.innerText = ''
        errorMessages.innerText = ''
    }
})
