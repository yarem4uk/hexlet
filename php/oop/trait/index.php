<?php

namespace App;

require_once 'User.php';

$us = new User(32);

echo $us->getAge();
