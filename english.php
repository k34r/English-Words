<?php

$pdo = new PDO('mysql:host=localhost;sdbname=g92311gz_k34r','g92311gz_k34r','mibaLubi74');

$res = $pdo->query('SELECT COUNT(*) FROM g92311gz_k34r'); 
$num = $res->fetchColumn(); //получаем количество строк в базе
$id = rand(1,$num); //выбираем случайный id 

$query = $pdo->query("SELECT * FROM g92311gz_k34r WHERE id=$id");
$word = $query->fetch(PDO::FETCH_OBJ);
$eng_word = $word->english;
$rus_word = $word->russian;
$arr =  [$num, $eng_word, $rus_word]; // берём случайное слово из базы

echo json_encode($arr);




?>