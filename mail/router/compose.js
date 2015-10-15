var bodyParser = require('body-parser');
<<<<<<< HEAD
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
module.exports = function(app) {
    var sql = require('./db');
    app.post('/compose', urlencodedParser, function(req, res) {
        response = {
            from: app.session,
            recepiants: req.body.recepiants,
            cc: req.body.cc,
            bcc: req.body.bcc,
            subject: req.body.subject,
            content: req.body.content,
            fileUploaded: req.body.fileUploaded
        };

        if (!response.recepiants) {
            return;
        } else {
            sql.query('insert into message_details (from_email,to_mail,message_subject,message_content,message_cc_mail,message_bcc_mail,message_attachment_path) values("' + response.from + '","' + response.recepiants + '","' + response.subject + '","' + response.content + '","' + response.cc + '","' + response.bcc + '","' + response.fileUploaded + '")', function(err, rows, fields) {
                if (!err) {
                    console.log('The solution is: ', rows);

                } else {
                    console.log('Error while performing Query.');
                }
            });
        }
    });
=======
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{
var sql= require('./db');
  app.post('/compose',urlencodedParser, function (req, res) {
  response = {
    from:   app.session,
    recepiants:req.body.recepiants,
    cc:req.body.cc,
    bcc:req.body.bcc,
    subject:req.body.subject,
    content:req.body.content,
    fileUploaded:req.body.fileUploaded
};

if(!response.recepiants){
return ;
}

else {
  sql.query('insert into message_details (from_email,to_mail,message_subject,message_content,message_cc_mail,message_bcc_mail,message_attachment_path) values("'+response.from+'","'+response.recepiants+'","'+response.subject+'","'+response.content+'","'+response.cc+'","'+response.bcc+'","'+response.fileUploaded+'")', function(err, rows, fields) {
    if (!err){
      console.log('The solution is: ', rows);

    }
    else
    {
      console.log('Error while performing Query.');
    }
});
}
});
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780


}
