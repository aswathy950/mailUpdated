var socket = io.connect('http://localhost:3000');

var sendMail = function() {
    console.log('Clicked');

    var data = {
        to      : document.getElementById('recepiants').value,
        cc      : document.getElementById('cc').value,
        bcc     : document.getElementById('bcc').value,
        subject : document.getElementById('subject').value,
        content : document.getElementById('content').value
    };
    console.log(data);
    socket.emit('send_mail', data);
    return false;
};
socket.on('receive', function(data)
{
    console.log('You got a new mail. Check inbox');
    console.log("To : " +data.to);
    console.log("cc : " +data.cc);
    console.log("bcc : " +data.bcc);
    console.log("subject : " +data.subject);
    console.log("content : " +data.content);

});
