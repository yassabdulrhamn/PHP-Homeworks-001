<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Done</title>
</head>

<body>
</body>
</html>
<?PHP
$connection = new mysqli("localhost", "root", "", "tourism");
$name = $_POST['fullname'];
$DOBDay = $_POST['DOBDay'];
$DOBMonth = $_POST['DOBMonth'];
$DOBYear = $_POST['DOBYear'];
$email = $_POST['email'];
$country = $_POST['country'];
$StartDateDay = $_POST['StartDateDay'];
$StartDateMonth = $_POST['StartDateMonth'];
$StartDateYear = $_POST['StartDateYear'];
$Typeaday = $_POST['Typeaday'];
$phone = $_POST['phone'];
$Guider = $_POST['Guider'];


$BirthDay = $DOBYear.'-'.$DOBMonth.'-'.$DOBDay;
$StartTripin = $StartDateYear.'-'.$StartDateMonth.'-'.$StartDateDay;

$sql = "INSERT INTO booking ( Boo_Name ,  Boo_DoB ,  Boo_email ,  Boo_Country ,  Days ,  TypeOftrip ,  phone , Guider )
VALUES ('$name', '$BirthDay', '$email', '$country', '$StartTripin', '$Typeaday','$phone','$Guider')";

if ($connection->query($sql) === TRUE) {
header('Location: '.'Thankyou.html');
} else {echo "404";}
?>
