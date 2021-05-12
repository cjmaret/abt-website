<?php 
$name = $_POST['name'];
$company = $_POST['company'];
$email = $_POST['email'];
$dropdown = $_POST['dropdown'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent="From: $name \n Phone: $phone \n Company: $company \n Email: $email \n Subject: $dropdown \n Message: $message";
$recipient = "cjmaret@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";

if(isset($_POST['submit'])){//if submit is clicked.
    if ($_POST['input'] == ''){echo "Cannot be Empty";}//the input to check is empty.
    else{header("Location: index.html");} //redirect to your page.
    }
?>