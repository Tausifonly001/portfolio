<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email configuration
    $to = "mdtausifaliansari@gmail.com"; // Replace with your email
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Email body
    $email_body = "<h2>Contact Form Submission</h2>
                   <p><strong>Name:</strong> $name</p>
                   <p><strong>Email:</strong> $email</p>
                   <p><strong>Message:</strong></p>
                   <p>$message</p>";
    
    if (mail($to, $subject, $email_body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Try again later.'); window.location.href='index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
