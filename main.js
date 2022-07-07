let keys = document.querySelectorAll('.bg');
let spacekey = document.querySelector('.space-bar');
let shift_left = document.querySelector('.shift-left');
let shift_right = document.querySelector('.shift-right');
let caps_lock_key = document.querySelector('.caps');
let body = document.querySelector('.body');

console.log("Prudhvi")

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText)
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if (e.code == 'Space') {
            spacekey.classList.add('active')
        }
        if (e.code == 'ShiftLeft') {
            shift_left.classList.add('active')
        }
        if (e.code == 'ShiftRight') {
            shift_right.classList.add('active')
        }
        if (e.code == 'Capslock') {
            caps_lock_key.classList.add('active')
        }
    }
})
window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if (e.code == 'Space') {
            spacekey.classList.remove('active')
            spacekey.classList.add('remove')
        }
        if (e.code == 'ShiftLeft') {
            shift_left.classList.remove('active')
            shift_left.classList.add('remove')
        }
        if (e.code == 'ShiftRight') {
            shift_right.classList.remove('active')
            shift_right.classList.add('remove')
        }
    }
})