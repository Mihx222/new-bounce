<?php
  // Connection config
  $servername = "localhost";
  $username = "root";
  $dbname = "bounce_db";
  $table_name = "user";

  // Connect to DBMS
  $link = mysqli_connect($servername, $username);
  if (!$link) {
    die('Could not connect: '.mysqli_error($link)."\n");
  }

  // Make $dbname the current database
  $db_selected = mysqli_select_db($link, $dbname);

  // If we couldn't, then it either doesn't exist, or we can't see it. So we create it.
  if (!$db_selected) {
    $sql = 'CREATE DATABASE IF NOT EXISTS '.$dbname;
    if (mysqli_query($link, $sql)) {
      // Make $dbname the current database again after creation
      $db_selected = mysqli_select_db($link, $dbname);
    } else {
      echo 'Error creating database: '.mysqli_error($link)."\n";
    }
  }

  // Check if table exists, if not, create it
  if (!mysqli_query($link, 'SELECT 1 FROM '.$table_name)) {
    $sql = 'CREATE TABLE IF NOT EXISTS '.$table_name
          .'(id int(4) NOT NULL PRIMARY KEY AUTO_INCREMENT,'
          .'name varchar(20) UNIQUE NOT NULL,'
          .'score int(5) NOT NULL DEFAULT 0)';
    if (!mysqli_query($link, $sql)) {
      echo 'Error creating table '.$table_name.': '.mysqli_error($link)."\n";
    }
  }
?>