<?php

namespace App;

require_once 'user.php';

class Usermapper 
{
    private $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function save($user)
    {

        /* $stmtUser = $this->pdo->prepare("insert into users (name) values(?)"); */
        /* $stmtUser->execute([$user->getName()]); */
        /* $user->setId($this->pdo->lastInsertId()); */
        
        return array_map(function($item) {
           return [$item->getName(), $item->getFilepath()]; 
        }, $user->getPhotos());
    }
}
