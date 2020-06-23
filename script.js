let check = document.querySelector('input[type="checkbox"]');
let text1 = document.querySelector('#one')
let text2 = document.querySelector('#two')
let text3 = document.querySelector('#three')

check.addEventListener('click', () => {
    if (check.checked) {
        text1.textContent = `$19.99`;
        text2.textContent = `$24.99`;
        text3.textContent = `$39.99`;
    } else {
        text1.textContent = `$199.99`;
        text2.textContent = `$249.99`;
        text3.textContent = `$399.99`;
    }
})
console.log(check)