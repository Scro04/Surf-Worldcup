<?php


try {
// Establish connection to Database
require('connect.php');
$dbconfig = new DBConfig();
$mysql_link = $dbconfig->db_connect();

// Select all  pre-defined user messages
$query = "SELECT DISTINCT name FROM node"; 
$result = MYSQL_QUERY($query);
  
$x = 0;
$num = MYSQL_NUMROWS($result);
  
$array = array();

// Split the result in parameters
while($x < $num)
{
    $name = mysql_result($result, $x, "name");
    
    array_push($array, $name);
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