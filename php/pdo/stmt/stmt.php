<?php

namespace App;

$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
   \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
);


$pdo = new \PDO('sqlite::memory:', null, null, $opt);


$pdo->exec("create table users (id integer, name string)");

$pdo->exec("insert into users values (1, 'john')");
$pdo->exec("insert into users values (3, 'adel')");
$pdo->exec("insert into users values (8, 'mike')");

$stmt = $pdo->query("select * from users");

/* print_r($stmt->fetchall()); */

/* while ($row = $stmt->fetch()) { */
/*     print_r($row); */
/* } */

foreach ($stmt as $value) {
    print_r($value);
}
