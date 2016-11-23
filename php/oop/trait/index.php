<?php

namespace App;

require_once 'User.php';

$us = new User(32);

$us2 = new User(12);

/* echo $us->compare($us2); */
echo $us->isOlderThan($us2);
