<?php

namespace Employee;

require_once 'employee.php';

use function Employee\employee;


$emp = employee();
echo $emp->setSurname('Yaremchuk')->setName('Alex');

