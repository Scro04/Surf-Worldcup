<?php


try {
// Establish connection to Database
require('connect.php');
$dbconfig = new DBConfig();
$mysql_link = $dbconfig->db_connect();

// Select all  pre-defined user messages
$query = "SELECT * FROM SideEvents"; 
$result = MYSQL_QUERY($query);
  
$x = 0;
$num = MYSQL_NUMROWS($result);
  
$array = array();

// Split the result in parameters
while($x < $num)
{
	$tmp_array = array();
    $id = mysql_result($result, $x, "ID");
	$subject = mysql_result($result, $x, "Subject");
	$description = mysql_result($result, $x, "Description");
	$type = mysql_result($result, $x, "Type");
    
    array_push($tmp_array, $id);
	array_push($tmp_array, $subject);	
	array_push($tmp_array, $description);
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