let btn = document.getElementById(`action`);

btn.addEventListener('click', () => {
    let message = document.getElementById('mesg');
    if(message.value === '') {
        alert(`enter Your Massage`);
    }else {
        document.getElementById('pnt').innerHTML = message.value;
    }
})