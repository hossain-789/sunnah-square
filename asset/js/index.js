//lost-password
document.getElementById('getResetPasswod').addEventListener('click', () => {
    event.preventDefault()
    let emailId = document.getElementById('getEmailAddress').value;
    if (emailId.length <= 5) {
        document.getElementById('subscribError').innerHTML = '<i class="bi bi-bell"></i> Enter a username or email address.';
    } else {
        document.getElementById('subscribError').innerHTML = '<i class="bi bi-bell"></i> Invalid username or email.';
    }
})

