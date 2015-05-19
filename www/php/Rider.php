<?php


try {
// Establish connection to Database
require('connect.php');
$dbconfig = new DBConfig();
$mysql_link = $dbconfig->db_connect();

// Select all  pre-defined user messages
$query = "SELECT * FROM Rider"; 
$result = MYSQL_QUERY($query);
  
$x = 0;
$num = MYSQL_NUMROWS($result);
  
$array = array();

// Split the result in parameters
while($x < $num)
{
	$tmp_array = array();
    $id = mysql_result($result, $x, "ID");
	$vorname = mysql_result($result, $x, "Vorname");
	$nachname = mysql_result($result, $x, "Nachname");
	$land = mysql_result($result, $x, "Land");
 	$kennung = mysql_result($result, $x, "Kennung");
	$link = mysql_result($result, $x, "Bild-Link");
	$type = mysql_result($result, $x, "Type");
    
    array_push($tmp_array, $id);
	array_push($tmp_array, $vorname);
	array_push($tmp_array, $nachname);
	array_push($tmp_array, $land);
	array_push($tmp_array, $kennung);
	array_push($tmp_array, $link);
	array_push($tmp_array, $type);
	array_push($array, $tmp_array);
    $x++;
}
require('disconnect.php');
// Send the Data back to the JS-Function
echo json_encode($array);
}
catch(Exception $e)
{
  echo "Network connection not working.";
}
?>