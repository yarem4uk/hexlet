<?php

namespace App;

require_once 'BaseModel.php';
require_once 'User.php';
require_once 'Member.php';
require_once 'Teacher.php';

echo User::getTableName();
echo "\n";
echo Member::getTableName();
echo "\n";
echo BaseModel::getTableName();
