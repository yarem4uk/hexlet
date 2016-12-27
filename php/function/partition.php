<?php 


require 'vendor/autoload.php';

use function Functional\partition;

$list = [0, 1, 2, 3, 4, 5];

list($one, $two) = partition($list, function($item){
    return $item % 2 != 0;
});

print_r($one);
print_r($two);

function separateEvenAndOddNumbers($arr){
    
    list($one, $two) = partition($list, function($item){
        return $item % 2 != 0;
    });
    return [$two, $one];
}
