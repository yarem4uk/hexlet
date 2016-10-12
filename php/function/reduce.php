<?php

require 'vendor/autoload.php';

use function Functional\zip;
use function Functional\map;

/* $list = 1; */
$list = ['cat', 'dog', 'fish', 'fish'];
/* $arr = [1, 3, 3, 9, 4]; */

function wordsCount($list){
    
    return  array_reduce($list, function($item, $acc){
        if(!array_key_exists($item, $acc))
            $acc[$item] = 1;
        else 
            $acc[$item]++;
        return $acc;
    }, []);
}

print_r(wordsCount($list));
