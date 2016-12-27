<?php

namespace App;

require_once 'query.php';


$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
);


$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$query = new Query($pdo, 'users');
/* var_dump($query); */

$pdo->exec("
        create table users (id integer,
                            name string,
                            social string,
                            age integer)
    ");

$pdo->exec("insert into users values (1, 'john', 'github', 17)");
$pdo->exec("insert into users values (3, 'adel', 'facebook', 17)");
$pdo->exec("insert into users values (8, 'Mike', 'github', 17)");


/* $data = $pdo->query("select * from users")->fetchall(); */
/* print_r($data); */

/* $query = $query->where('from', 'github'); */
$query = $query->where('id', 3)->where('age', 21);
/* $query = $query->where('id', 'john'); */
/* print_r($query->toSql()); */
$query->toSql();
$query->all();
