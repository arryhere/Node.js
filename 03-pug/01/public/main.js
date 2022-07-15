
let btn = document.getElementsByClassName('btn')[0]
btn.addEventListener('click', function () {
    if (document.body.style.backgroundColor !== 'lightblue'){
        document.body.style.backgroundColor = 'lightblue'
    }
    else{
        document.body.style.backgroundColor = 'white'
    }
})