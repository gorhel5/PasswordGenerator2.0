const passwordInput = document.querySelector('.password__input');
const passwordLength = document.querySelector('.length__input');
const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const numbers = document.querySelector('.numbers');
const symbols = document.querySelector('.symbols');

const copyButton = document.querySelector('.copy-btn');
const generateButton = document.querySelector('.generate-btn');


// const length = passwordLength.value;

generateButton.addEventListener('click', () => {

    let charsNumbers = '0123456789';
    let charsUppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let charsLowercase = 'qwertyuiopasdfghjklzxcvbnm';
    let charsSymbols = '!@#$%^&*()[]';

    if (uppercase.checked) {
        charsNumbers += charsUppercase;
    }
    if (lowercase.checked) {
        charsNumbers += charsLowercase;
    }
    if (symbols.checked) {
        charsNumbers += charsSymbols;
    }

    if (uppercase.checked == false && 
        lowercase.checked == false && 
        symbols.checked == false && 
        numbers.checked == false) {

        alert('Choose one of parameters!');
        return false;
    }

    if (passwordLength.value < 5 ) {
        alert('Password must contain more than 5 characters!');
        return false;
    }

    if (passwordLength.value > 30) {
        alert('Password must contain less than 30 characters!');
        return false;
    }

    let password = '';

    for ( let i = 0; i < passwordLength.value; i++ ) {
        password += charsNumbers[Math.floor(Math.random() * charsNumbers.length)];
    }
    passwordInput.value = password;
});

copyButton.addEventListener('click', () => {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordInput.value);
})
