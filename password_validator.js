// Password Validator


let specialChars = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";
let numbers = "1234567890";

function SimplePassword(str) {
    let hasSpecialCharacter = false;
    let hasNumber = false;
    let hasUppercase = false;
    let lowerCasePassword = str.toLowerCase();

    //Check password is between 8-30 characters
    if (str.length < 8 || str.length > 30) {
        return false;
    }

    //Check password doesn't contain the word 'password'
    if (lowerCasePassword.includes("password")) {
        return false;
    }


    for (let i = 0; i < str.length; i++) {
        //Check the password contains at least one special character
        if (specialChars.indexOf(str[i]) !== -1) {
            hasSpecialCharacter = true
        }
        //Check the password contains at least one number
        if (numbers.indexOf(str[i]) !== -1) {
            hasNumber = true;
        }
        //Check the password contains at least one uppercase letter
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            hasUppercase = true;
        }
        if (hasSpecialCharacter && hasNumber && hasUppercase) {
            return true;
        }
    }
    return false;
}

