<?php

namespace App;

require_once 'db.php';

$db = new Db('./db.txt');

$db->set('key', 'value');
$db->set('key2', 'anothervalue');
$db->set('key3', 'anothervalue4');
$db->set('key3', 'hellow');

echo $db->get('key3') . PHP_EOL;
