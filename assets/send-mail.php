<?php
if (isset($_POST)) {
  error_reporting(0);

  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];
  $domain = $_SERVER["HTTP_HOST"];
  $to = "josue_b_21@outlook.com";
  $subject_mail = "Contact from the site form $domain.";
  $message = "
    <p>Data sent from the site form <b>$domain</b></p>
    <ul>
      <li>Name: <b>$name</b></li>
      <li>Mail: <b>$email</b></li>
      <li>Subject: $subject</li>
      <li>Comment: $comments</li>
    </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Automatic Sending. No Reply <no-reply@$domain>";

  $send_mail = mail($to, $subject_mail, $message, $headers);

  if($send_mail) {
    $res = [
      "err" => false,
      "message" => "Your data has been sent"
    ];
  } else {
    $res = [
      "err" => true,
      "message" => "Error sending your data. Please try again."
    ];
  }

  header("Access-Control-Allow-Origin: *");
  header( 'Content-type: application/json' );
  echo json_encode($res);
  exit;
}