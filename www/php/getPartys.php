<?php


try {
// Establish connection to Database
require('connect.php');
$dbconfig = new DBConfig();
$mysql_link = $dbconfig->db_connect();

// Select all  pre-defined user messages
$query = "SELECT * FROM Program WHERE TYPE=5"; 
$result = MYSQL_QUERY($query);
  
$x = 0;
$num = MYSQL_NUMROWS($result);
  
$array = array();

// Split the result in parameters
while($x < $num)
{
	$tmp_array = array();
    $id = mysql_result($result, $x, "ID");
	$date = mysql_result($result, $x, "Date");
	$from = mysql_result($result, $x, "From_");
	$to = mysql_result($result, $x, "To_");
	$subject = mysql_result($result, $x, "Subject");
	$type = mysql_result($result, $x, "Type");
	$img = mysql_result($result, $x, "img");
    
    array_push($tmp_array, $id);
	array_push($tmp_array, $date);
	array_push($tmp_array, $from);
	array_push($tmp_array, $to);
	array_push($tmp_array, $subject);
	array_push($tmp_array, $type);
	array_push($tmp_array, $img);
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