// створюємо методи об"єкта для обробки логіну, пароля та перевірки доступу

function promptLogin() {
    return prompt("Введіть логін1 :");
}

function promptPassword() {
    return prompt("Введіть пароль:");
}

function checkLogin(log, login) {
    return log === login;
}

function checkPassword(inputPassword, password) {
    return inputPassword === password;
}

const login = "admin";
const password = "12345";
let isAdmin;

const user = {};

while(true) {
    let log = promptLogin();

    if (checkLogin(log, login)) {
        let inputPassword = promptPassword();
        if (checkPassword(inputPassword, password)) {
            isAdmin = true;
            user.login = login;
            user.password = password;
            user.isAdmin = isAdmin;
            alert('Ласкаво просимо!');
            break;
        } else {
            alert("невірний пароль");
        }
    } else if (log === null) {
        isAdmin = false;
        user.login = log;
        user.isAdmin = isAdmin;
        alert("Ласкаво просимо!");
        break;
    } else {
        alert("Access denied");
    }
}

console.log("isAdmin: ", isAdmin);
console.log("user", user);

