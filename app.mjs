const toggle = document.getElementById('toggle')
const monthly = document.querySelectorAll('.price-monthly')
const annually = document.querySelectorAll('.price-annually')
const price = document.querySelectorAll('.price')

// console.log(toggle)
// console.log(monthly)
// console.log(annually)
// console.log(price)


let toggle_status = localStorage.getItem('toggleSt');
toggle.checked = JSON.parse(localStorage.getItem('toggleSt'))

// console.log(toggle_status)
// console.log(toggle.checked)

let checkToogle = () => {
    if (toggle.checked) {

        toggle_status = toggle.checked;
        // console.log(toggle_status)
        localStorage.toggleSt = toggle_status;
        annually.forEach(element => {
            if (element.style.display = 'none') {
            }
        });
        monthly.forEach(element => {
            if (element.style.display = 'flex') {
            }
        });



    } else {
        toggle_status = toggle.checked;
        // console.log(toggle_status)
        localStorage.toggleSt = toggle_status;
        monthly.forEach(element => {
            if (element.style.display = 'none') {
            }
        });
        annually.forEach(element => {
            if (element.style.display = 'flex') {
            }
        });


    }
}
checkToogle();
toggle.addEventListener('change', () => {
    checkToogle();
})