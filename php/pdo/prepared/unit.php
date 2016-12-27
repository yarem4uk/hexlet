<?php

namespace App;


$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
   \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
);

$pdo = new \PDO('sqlite::memory:', null, null, $opt);


$pdo->exec("create table users (id integer, name string, role string)");

$data = [
    [1, 'john', 'member'],
    [2, 'mike', 'admin'],
    [3, 'adel', '']
    /* [3, 'adel', 'member'] */
];

$stmt = $pdo->prepare("insert into users values (?, ?, ?)");

foreach ($data as $value) {
    $stmt->execute($value);
}

$stmt = $pdo->query("select name from users where role = ? and name != ?");
$stmt->execute(['member', '']);
print_r($stmt->fetchAll());
