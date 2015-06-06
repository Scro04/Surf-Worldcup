<?php
//----------------------------BUILD UP CONNECTION TO DATABASE------------------

  class DBConfig{

    //$dbconfig = new DBConfig();

    public $dbHost = 'localhost';
    public $dbUser = 'root';
    public $dbPassword = '';
    private $dbDatabase = 'SurfWorldcup';

//-----------------------------------------------------------------------------

  public function db_connect() {
    $link=mysql_connect($this->dbHost, $this->dbUser, $this->dbPassword) or
      die("Database not reachable.");
    mysql_select_db($this->dbDatabase ,$link) or
      die ("Database not reachable.");
    mysql_set_charset("utf8",$link);
    return $link;
  }

  }
  //-----------------------------------------------------------------------------
?>
