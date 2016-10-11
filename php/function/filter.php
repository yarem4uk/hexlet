<?php 

/* require getenv('COMPOSER_HOME') . '/vendor/autoload.php'; */
require 'vendor/autoload.php';
use function Functional\select;
use function Functional\map;


$m = range(1, 10);

/* print_r($m); */

function evenSquareSum($arr){
    $result = select($arr, function($item){
        return $item % 2 == 0;
    });
    return map($result, function($item){
        return $item ** 2;
    });
        
}
print_r (evenSquareSum($m));
