<?php

namespace App;

$opt = array(
    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
);

$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$pdo->exec("create table users (id integer, name string)");
$pdo->exec("insert into users values (3, 'adel')");
$pdo->exec("insert into users values (7, 'ada')");
$data = $pdo->query("select * from users")->fetchall();
print_r($data);

