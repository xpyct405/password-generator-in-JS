let numValue = document.querySelector('#nums-quantity');
if (numValue.value == '') {
    numValue.value = 10
}

let numsAbc = document.querySelector('#nums-abc');
// setInterval(() => {
//     console.log(numsAbc.checked)
// }, 1000)
// console.log(numsAbc.checked);

let pass = document.createElement('div');
pass.classList.add('pass');
document.body.appendChild(pass);

document.querySelector('button').addEventListener('click', () => {

    let numsArray = '0123456789'
    let numsAbcArray = '0123456789qwertyuiopasdfghjklzxcvbnm'
    let password = ''

    if (numsAbc.checked == false) {
        for (let i = 0; i < numValue.value; i++) {
            // Получение рандомного символа из строки array и добавление к паролю из предыдущего цикла
            password += numsArray.charAt(Math.floor(Math.random() * numsArray.length));
        }
    } else {
        for (let i = 0; i < numValue.value; i++) {
            // Получение рандомного символа из строки array и добавление к паролю из предыдущего цикла
            password += numsAbcArray.charAt(Math.floor(Math.random() * numsAbcArray.length));
        }
    }

    console.log(password);
    pass.innerText = password;

    return password
})