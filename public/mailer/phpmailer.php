<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;



if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['contact'])) {
  if (!empty($_POST['email']) && !empty($_POST['title']) && !empty($_POST['message'])) {

    $email = htmlspecialchars(trim($_POST['email']));
    $title = htmlspecialchars(trim($_POST['title']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
      // Configuration
      // $mail->SMTPDebug = SMTP::DEBUG_SERVER;
      //Je veux des infos de débug

      //On configure le SMTP
      $mail->isSMTP();
      $mail->SMTPSecure = 'tls';
      $mail->SMTPAuth = true;
      $mail->Host = 'smtp.gmail.com';
      $mail->Port = 587;
      $mail->Username = getenv("MAIL_USERNAME");
      $mail->Password = getenv("MAIL_PASSWORD");
      // CharSet
      $mail->CharSet = "utf-8";

      // Destinataires
      $mail->addAddress('dumaillet.lucas@gmail.com');
      $mail->addCC($email);

      // Expéditeur
      $mail->setFrom($email);
      // $mail->addReplyTo($email);

      // Contenu
      $mail->Subject = $title;
      $mail->Body = $message;

      $mail->AltBody = $message;

      // Envoyer
      $mail->send();
      // echo "Message envoyé";
    } catch (Exception) {
      echo "Message non envoyé. Erreur: {$mail->ErrorInfo}";
    }
  }
}
