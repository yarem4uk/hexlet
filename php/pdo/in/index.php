<?php

namespace App;

require_once 'solution.php';

$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
   \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
);

$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$pdo->exec("create table users (id integer,
                                first_name string, 
                                source string)
     ");

$data = [
    [1, 'john', 'yahoo'],
    [3, 'adel', 'gmail'],
    [8, 'Mike', 'bing'],
    [9, 'ada', 'yandex']
];

$stmt = $pdo->prepare("insert into users values (?, ?, ?)");
foreach ($data as $value) {
    $stmt->execute($value);
}

/* $table = $pdo->query("select id from users where id in (1, 8) order by source")->fetchAll(); */
/* print_r($table); */

/* $params = []; */
/* $params = ['id' => []]; */
/* $params = ['first_name' => ['john', 'adel']]; */
/* $params = ['first_name' => 'ada']; */
$params = ['first_name' => 'ada', 'source' => ['bing', 'gmail']];

print_r(where($pdo, $params)); 
