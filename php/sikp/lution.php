<?php

require_once 'pair.php';
require_once 'filter.php';
require_once 'map.php';
require_once 'accumulate.php';


$ll = makeList(1, 2, 4, 6, 8, 9);


$result = filter($ll, function($item){
    if($item % 3 == 0){
        return $item;
    }
});

$result2 = map($result, function($item){
    return($item ** 2);    
});

$result3 = accumulate($result3, function($item, $acc){
    return $item + $acc;
}, 0);

/* echo listToString($result2); */
/* echo listToString($result); */
/* echo listToString($ll); */

echo $resutl3;
