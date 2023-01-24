//select btn
let btn = document.getElementById(`action`);
//add function to button
btn.addEventListener('click', () => {
    let message = document.getElementById('mesg');
    if(message.value === '') {
        document.getElementById('pnt').innerHTML = "Can not be empty";
    }else {
        document.getElementById('pnt').innerHTML = message.value;
    }
})