<?php
require_once('db.php');

$login = $_POST['login'];
$pass = $_POST['pass'];
$repeatpass = $_POST['repeatpass'];
$email = $_POST['email'];

if(empty($login) || empty($pass) || empty($repeatpass) || empty($email)){
    echo 'Заполните все поля';
} else {
    if($pass != $repeatpass){
        echo 'Пароли не совпадают';
    } else {
        $sql = "INSERT INTO g92311gz_k34r.users (login,password,email) VALUES ('$login','$pass','$email')";
        if ($pdo -> query($sql)) {
            echo 'Регистрация прошла успешкно';
            // header('Location: '.'index.html');
        } else {
            echo 'Ошибка:' . $pdo->error;
        }
    }
}

?>