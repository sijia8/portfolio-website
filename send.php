<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Only POST allowed');
}


// Simple santization
$name = strip_tags(trim($_POST['name'] ?? ''));
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    // Bad input
    http_response_code(400);
    exit('Please complete form and try again');
}

$to = 'info@si-jia.software';
$subject = 'Contact from ' . $name;
$body = "Name: $name\nEmail: $email\n\nMessage: \n$message";
$headers = "From: $name <$email>\r\nReply-To: $email\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    // Success response ()
    header('Location: index.html');
    exit;
} else {
    http_response_code(500);
    exit('Sorry, there was an error sending your message');
}