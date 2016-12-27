<?php

require_once 'pair.php';
/* require_once 'reverse.php'; */


/* $ll = makelist(1, 2, 3, 4); */

function map($list, $func){
    $iter = function($item, $acc) use (&$iter, $func){
        if ($item === null){
            return $acc;
        }
        return $iter(cdr($item), cons($func(car($item)), $acc));
    };
    return $iter($list, null);
}

/* echo listToString(reverse($map($ll, 3,  null))); */

/* $ff = function($item){ */
/*     return $item ** 2; */
/* }; */

/* echo listToString(map($ll,$ff)); */
