<?php

namespace App;

require_once 'user.php';
require_once 'usermapper.php';


$opt = array(
   \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
   \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
);

$pdo = new \PDO('sqlite::memory:', null, null, $opt);

$pdo->exec("create table users (
    id integer primary key autoincrement,
    name string not null)");

$pdo->exec("create table user_photo (
    id integer primary key autoincrement,
    user_id integer not null,
    name string not null,
    filepath string not null)");

$user = new User('Alex');
$user->addPhoto('family', 'path/to/photo/family');
$user->addPhoto('party', 'path/to/photo/party');
$user->addPhoto('friends', 'path/to/photo/friends');

/* print_r($user->getPhotos()); */

$mapper = new Usermapper($pdo);
print_r($mapper->save($user));

