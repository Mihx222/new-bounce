<?php
    require 'connect.php';

    // Request parameters
    if (isset($_POST['user']) && isset($_POST['score'])) {
        $user = $_POST['user'];
        $score = $_POST['score'];
        $db_user_sql = mysqli_query($link, 'SELECT * FROM '.$table_name
                                            .' WHERE LOWER(name) = \''.strtolower($user).'\'');
        $db_user = mysqli_fetch_assoc($db_user_sql);
        
        // Update the score value if necessary. We only want to save the highest score.
        if ($score > $db_user['score']) {
            $sql = null;
            // If the user already exists in the database, update the score, else, insert new user
            if ($db_user) {
                $sql = 'UPDATE '.$table_name
                        .' SET score = '.$score
                        .' WHERE LOWER(name) = \''.strtolower($user).'\'';
            } else {
                $sql = 'INSERT INTO '.$table_name
                        .' (name, score) VALUES (\''.$user.'\', '.$score.')';
            }
    
            // Execute query
            if ($sql) {
                if (!mysqli_query($link, $sql)) {
                    echo 'Data could not be persisted: '.mysqli_error($link)."\n";
                }
            } else {
                echo 'There is no query to execute. This should not be possible!';
            }
        }
    } else {
        echo 'Received wrong request parameters!';
    }
    mysqli_close($link);
?>