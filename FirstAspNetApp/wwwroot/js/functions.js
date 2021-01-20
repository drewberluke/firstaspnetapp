var submit = document.getElementById('submit_btn');

submit.addEventListener('click', function () {
    from = document.getElementById('from').value;
    email = document.getElementById('email').value;
    subject = document.getElementById('subject').value;
    message = document.getElementById('message').value;
    output =
        "From: " + from + ',\n' +
        "Email: " + email + ',\n' +
        "Subject: " + subject + ',\n' +
        "Message: " + message + ".";
    alert(output);
});