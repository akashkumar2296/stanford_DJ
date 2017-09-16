<?php
/**
 * This example shows how to handle a simple contact form.
 */
$msg = '';
//Don't run this unless we're handling a form submission
if (array_key_exists('email', $_POST)) {
    date_default_timezone_set('Etc/UTC');
    require 'PHPMailerAutoload.php';
    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Tell PHPMailer to use SMTP - requires a local mail server
    //Faster and safer than using mail()
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'ssl';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = '465';
    $mail->Username = 'djstanford2017@gmail.com';
    $mail->Password = 'rajraina';
    //Use a fixed address in your own domain as the from address
    //**DO NOT** use the submitter's address here as it will be forgery
    //and will cause your messages to fail SPF checks
    $mail->setFrom('djstanford@juug.org', 'New Booking Request');
    //Send the message to yourself, or whoever should receive contact for submissions
    $mail->addAddress('godjvip@gmail.com, 'Admin GoDJ');
    //Put the submitter's address in a reply-to header
    //This will fail if the address provided is invalid,
    //in which case we should ignore the whole request
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'PHPMailer contact form';
        //Keep it simple - don't use HTML
        $mail->isHTML(false);
        //Build a simple message body
        $mail->Body = <<<EOT
Artist Name: {$_POST['artistName']}
Email: {$_POST['email']}
Name: {$_POST['name']}
Message: {$_POST['message']}
Phone Number: {$_POST['phoneNumber']}
EOT;
        //Send the message, check for errors
        if (!$mail->send()) {
            //The reason for failing to send will be in $mail->ErrorInfo
            //but you shouldn't display errors to users - process the error, log it on your server.
            $msg = 'err1';
        } else {
            $msg = 'ok';
        }
    } else {
        $msg = 'err2';
    }
    echo $msg;;
}
?>
