<?php


try {
// Establish connection to Database
require('connect.php');
$dbconfig = new DBConfig();
$mysql_link = $dbconfig->db_connect();

// Select all  pre-defined user messages
$query = "SELECT * FROM Bewerbe"; 
$result = MYSQL_QUERY($query);
  
$x = 0;
$num = MYSQL_NUMROWS($result);
  
$array = array();

// Split the result in parameters
while($x < $num)
{
	$tmp_array = array();
    $id = mysql_result($result, $x, "ID");
	$header = mysql_result($result, $x, "Header");
	$image = mysql_result($result, $x, "Image-Link");
	$type = mysql_result($result, $x, "Type");
	$description = mysql_result($result, $x, "Description");
    
    array_push($tmp_array, $id);
	array_push($tmp_array, $header);
	array_push($tmp_array, $image);
	array_push($tmp_array, $type);
	array_push($tmp_array, $description);
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