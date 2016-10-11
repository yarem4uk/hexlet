<?php

require_once 'pair.php';
/* require_once 'filter.php'; */


/* $ll = makeList(1, 2, 3, 4, 5, 6); */


function accumulate($list, $func, $acc){

    $iter = function($list, $acc) use (&$iter, $func){
        if ($list == null){
            return $acc;
        }
        
        return $iter(cdr($list), $func(car($list), $acc));
    };
    
    return $iter($list, $acc);
}

/* echo listToString(accumulate($ll)); */

$ff = function($item, $acc){
    return $item + $acc;
};

/* echo accumulate($ll, $ff, 0); */
