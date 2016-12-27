<?php

namespace App;

require_once 'query.php';

$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
   \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
);

$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$pdo->exec("create table users (id integer, 
                                name string, 
                                social integer,
                                age integer)
     ");

$pdo->exec("insert into users values (1, 'john', 'github', 17)");
$pdo->exec("insert into users values (3, 'adel', 'facebook', 17)");
$pdo->exec("insert into users values (8, 'mike', 'github', 17)");

/* $stmt = $pdo->query("select id, name  from users where from = 'github'"); */
/* $stmt = $pdo->query("select * from users"); */

/* print_r($stmt->fetchall()); */
/* while ($row = $stmt->fetch()) { */
/*     print_r($row); */
/* } */

/* /1* var_dump($stmt); *1/ */
/* foreach ($stmt as $value) { */
/*     print_r($value); */
/* } */

$query = new Query($pdo, 'users');
$query = $query->where('from', 'github');
$query = $query->select('id', 'name');
var_dump($query->all());
/* var_dump($query->count()); */
/* var_dump($query->toSql()); */
