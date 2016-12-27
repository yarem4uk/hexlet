<?php

require 'vendor/autoload.php';

use function Functional\zip;
use function Functional\map;


$first = [['name' => 'milan', 'scored' => 1], ['name' => 'milan', 'scored' => 0]];
$second = [['name' => 'porto', 'scored' => 1], ['name' => 'porto', 'scored' => 1]];

/* $aa = ['name' => 'porto', 'scored' => 1]; */
/* $jj = ['name' => 'milan', 'scored' => 0]; */

$res = zip($first, $second, function($one, $two){
    if($one['scored'] < $two['scored'])
        return $one['name'];
});

print_r($res);

