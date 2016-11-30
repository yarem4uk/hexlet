<?php

namespace App;

require_once 'Repository.php';

$repo = new Repository('users');

/* var_dump($repo->tableName); */
/* echo $repo->tableName; */

echo $repo->findAllByOwnerId(4);
