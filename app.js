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
document.querySelector('.block').appendChild(pass);

document.querySelector('button').addEventListener('click', () => {

    let numsArray = '0123456789'
    let numsAbcArray = '0123456789qwertyuiopasdfghjklzxcvbnm'
    let password = ''

    if (numsAbc.checked == false) {
        for (let i = 0; i < numValue.value; i++) {
            // Получение рандомного символа из строки numsArray и добавление к паролю из предыдущего цикла
            password += numsArray.charAt(Math.floor(Math.random() * numsArray.length));
        }
    } else {
        for (let i = 0; i < numValue.value; i++) {
            // Получение рандомного символа из строки numsAbcArray и добавление к паролю из предыдущего цикла
            password += numsAbcArray.charAt(Math.floor(Math.random() * numsAbcArray.length));
        }
    }

    console.log(password);
    pass.innerText = password;

    return password
})

// Чтобы по-дефолту уже был пароль при загрузке страницы
document.querySelector('button').click();

// При клике по pass копируем содержимое
pass.addEventListener('click', () => {
    // Создаём новый элемент
    let copied = document.createElement('div');
    copied.classList.add('copied')
    document.querySelector('.block').appendChild(copied)
    copied.innerText = 'Copied!'

    // Добавляем класс
    copied.classList.add('active')

    // Удаляем элемент через 1.3с
    setTimeout(() => {
        copied.remove()
    }, 1300)

    // Метод ниже копирует содержимое pass.innerText в буфер обмена
    navigator.clipboard.writeText(pass.innerText)
})