<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = "New Message from your portfolio"
    $message = $_POST['msg'];

    $mailTo = "rseguel.dev@gmail.com":
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved a mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers,);
    header("location: index.php?mailsend")
}