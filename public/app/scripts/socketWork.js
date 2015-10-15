var socket = io.connect('http://localhost:3000');

var initiateSocket = function(){
    var user = document.getElementById('Username').value;
    socket.emit('SetUser', user);
};
var sendMail = function() {

    var mail = {
        to      : document.getElementById('recepiants').value,
        cc      : document.getElementById('cc').value,
        bcc     : document.getElementById('bcc').value,
        subject : document.getElementById('subject').value,
        content : document.getElementById('content').value
    };
    console.log(mail);

    socket.emit('send_mail', mail);
    return false;
};

socket.on('receive', function(mail)
{
    console.log('You got a new mail. Check inbox');
    console.log("To : " +mail.to);
    console.log("cc : " +mail.cc);
    console.log("bcc : " +mail.bcc);
    console.log("subject : " +mail.subject);
    console.log("content : " +mail.content);
});
