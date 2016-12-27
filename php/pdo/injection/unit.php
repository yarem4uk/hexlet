<?php

namespace App;

$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
);

$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$pdo->exec("create table users (id integer, name string)");

/* var_dump($pdo); */

// WRONG
$id = 7;
/* $name = 'ada'; */

// SQL INJECTION
$name = "ada'); delete from users; --";
$n = $pdo->quote($name);
$sql = "insert into users values ($id, $n)";

/* print_r($sql); */

$pdo->exec($sql);
$data = $pdo->query("select * from users")->fetchall();
print_r($data);
