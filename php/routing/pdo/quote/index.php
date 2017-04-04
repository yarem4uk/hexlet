<?php

namespace App;

require_once 'query.php';

$opt = [
    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
];

$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$query = new Query($pdo, 'users');

$query = $query->where('from', 'github');
