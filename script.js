const subscribeBtn = document.getElementById('subscribeBtn')
const emailInput = document.getElementById('email-input')
const errorMessage = document.getElementById('error')
const successEmail = document.getElementById('success-paragraph')

subscribeBtn.addEventListener('click', () => {
    if (!emailInput.value === '' || emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ )) { 
        errorMessage.innerHTML = ''
        emailInput.style.background = 'transparent'
        emailInput.style.borderColor = 'hsl(231, 7%, 60%)'
        subscribeBtn.href = 'successPage.html'
       
    }else {
        errorMessage.innerHTML = 'Valid email required'
        emailInput.style.background = 'hsl(4, 100%, 67%, 0.2)'
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)'
    }
})