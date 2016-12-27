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
                                email string)
     ");

$data = [
    [1, 'john', 'john@gmail.com'],
    [3, 'adel', 'adel@yahoo.org'],
    [8, 'Mike', 'mike@bing.com'],
    [9, 'ada', 'ada@mydomain.com']
];

$stmt = $pdo->prepare("insert into users values (?, ?, ?)");
foreach ($data as $value) {
    $stmt->execute($value);
}

/* $params = []; */
/* $params = ['ad%']; */
/* $params = ['first_name' => 'ad%']; */
$params = ['email' => '%gmail%', 'first_name' => 'ad%'];


/* echo like($pdo, $params); */

print_r(like($pdo, $params));
