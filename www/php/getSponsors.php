<?php


try {
// Establish connection to Database
require('connect.php');
$dbconfig = new DBConfig();
$mysql_link = $dbconfig->db_connect();

// Select all  pre-defined user messages
$query = "SELECT * FROM SPONSORS"; 
$result = MYSQL_QUERY($query);
  
$x = 0;
$num = MYSQL_NUMROWS($result);
  
$array = array();

// Split the result in parameters
while($x < $num)
{
	$tmp_array = array();
    $id = mysql_result($result, $x, "id");
	$name = mysql_result($result, $x, "name");
	$link = mysql_result($result, $x, "link");
	$img = mysql_result($result, $x, "img");
	$desc = mysql_result($result, $x, "desc");
    
    array_push($tmp_array, $id);
	array_push($tmp_array, $name);
	array_push($tmp_array, $link);
	array_push($tmp_array, $img);
	array_push($tmp_array, $desc);
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