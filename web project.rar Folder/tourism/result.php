<!DOCTYPE HTML>
<html lang="en">
<head>
   <meta charset='utf-8'>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="Stylesheets/styles-menu.css">
   <link rel="stylesheet" href="Stylesheets/Style.css">
   <link rel="stylesheet" href="Stylesheets/slideshow.css">
   <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
   <script src="script.js"></script>
   <script src="Slideshow.js"></script>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Admin</title>
</head>
<body>
    <div id='cssmenu'>
<ul>
   <li><a href='index.html'>Home</a></li>
   <li><a href='Gallery.html'>Gallery</a></li>
   <li><a href='Booking.html'>Booking</a></li>
   <li><a href='contactus.html'>Contact us</a></li>
   <li><a href='Aboutus.html'>About us</a></li>
   <li  class='active'><a href='result.php'>Admin</a></li>
</ul>
</div>
       <header>
        <h1>Admin</h1>
    </header>
    <div id="header" class="header">

<table>
<tr class="Table-Head">
<td>
<p>Booked date</p>
</td>
<td>
<p>Name</p>
</td>
<td>
<p>Phone number</p>
</td>
<td>
<p>Date of birth</p>
</td>
<td>
<p>email</p>
</td>
<td>
<p>Trip in to</p>
</td>
<td>
<p>Date of trip</p>
</td>
<td>
<p>Type of trip</p>
</td>
</tr>
<?php

$connection = new mysqli("localhost", "root", "", "tourism");
$sql = "SELECT  Boo_ID ,  Boo_BookingDate ,  Boo_Name ,phone ,  Boo_DoB ,  Boo_email ,  Boo_Country ,  Days ,TypeOftrip FROM  booking ";
$total = $connection->query($sql);
    while($row = $total->fetch_assoc()) {
		echo
		"
		<tr class='Table-row'>
<td>
<p>" . $row["Boo_BookingDate"]. "</p>
</td>
<td>
<p>" . $row["Boo_Name"]. "</p>
</td>
<td>
<p>" . $row["phone"]. "</p>
</td>
<td>
<p>" . $row["Boo_DoB"]. "</p>
</td>
<td>
<p>" . $row["Boo_email"]. "</p>
</td>
<td>
<p>" . $row["Boo_Country"]. "</p>
</td>
<td>
<p>" . $row["Days"]. "</p>
</td>
<td>
<p>" . $row["TypeOftrip"]. "</p>
</td>
</tr>
";
    }
?>
</table>
<?php
$sql ='SELECT COUNT(Boo_ID),Guider FROM booking GROUP BY Guider';

$result = $connection->query($sql);
  while($row = $result->fetch_assoc()) {
  echo 'The guider <b>'. $row["Guider"].'</b> has ('. $row["COUNT(Boo_ID)"].') customers <br>';
}


$sql ='SELECT COUNT(Boo_ID) FROM booking';

$result = $connection->query($sql);

  while($row = $result->fetch_assoc()) {
  echo '
  <script>
  window.alert("Total of customers:'. $row["COUNT(Boo_ID)"].'");
  </script>';
}

 ?>

    </div>
    <div id="footer" class="footer">
      <p>All copyright &#169; goes to <b>Alaa & Hanan</b></p>
	  <a href="tel:4566487">Call 456-6487</a>
    </div>
</body>
</html>
