<?php

namespace App;

$opt = array(
    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
    \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC 
);

$dsn = 'sqlite:/home/alex/tmp/db.sqlite';
/* $dsn = 'sqlite::memory:'; */

$pdo = new \PDO($dsn, null, null, $opt);

/* $pdo->exec("drop table cars"); */
/* $pdo->exec("create table cars (id integer primary key autoincrement, model text not null, year text)"); */

/* /1* $id = 3; *1/ */
/* $data = [ */
/*     ['toyta', 2000], */
/*     ['nissan', 1990], */
/*     ['honda', 1998] */
/* ]; */

/* $stmt = $pdo->prepare("insert into cars (model, year) values (?, ?)"); */

/* foreach ($data as $value) { */
/*     $stmt->execute($value); */
/* } */

$table = $pdo->query("select * from cars")->fetchAll();
print_r($table);
