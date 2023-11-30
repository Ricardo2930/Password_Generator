const generatedPassword = document.querySelector('.password-box-values');
const optionsChecks = document.querySelectorAll('.check div input')
const butttonGenerator = document.querySelector('.button-generator-password')

const characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

const generatePassword = () => {
    let charsPassword = "";
    let randomPassword = "";
    let passWordLength = passwordLength.value;

    optionsChecks.forEach((option) => {
        if (option.checked) {
            charsPassword += characters[option.id]
        }
    })

    for (let i = 0; i < passWordLength; i++) {
        let random = Math.floor(Math.random() * charsPassword.length)
        randomPassword += charsPassword[random];
    }

    generatedPassword.innerHTML = randomPassword;
}


const iconCopy = document.querySelector('.fa-regular')
const copyMsg = document.querySelector('.copy')
iconCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedPassword.textContent)
    iconCopy.style.display = 'none';
    copyMsg.style.display = 'block';
    setTimeout(() => {
        iconCopy.style.display = 'block';
        copyMsg.style.display = 'none';
    }, 1000)
})


const passwordLength = document.querySelector('.password-length-input')
const passwordLengthValue = document.querySelector('.password-length-value')
passwordLength.addEventListener('input', () => {
    passwordLengthValue.innerHTML = passwordLength.value
})


butttonGenerator.addEventListener('click', generatePassword)


