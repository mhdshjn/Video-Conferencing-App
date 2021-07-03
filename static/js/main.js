console.log('In main.js!')


var usernameInput = document.querySelector('#username');
var btnJoin = document.querySelector('#btn-join');

var username;

btnJoin.addEventListener('click', () => {
    username = usernameInput.value;

    console.log('username: ', username);

    if(username == ''){
        return;
    }
    usernameInput.value = '';
    usernameInput.disabled = true;
    usernameInput.style.visibilty = 'hidden';

    btnJoin.disabled = true;
    btnJoin.style.visibilty = 'hidden';

    var labelUsername = document.querySelector('#label-username');
    labelUsername.innerHTML = username;
});