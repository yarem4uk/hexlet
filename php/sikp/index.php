<?php

require_once 'pair.php';


/* $ll = makelist(1, null); */
$ll = makelist(1, 2, 3, 4, 5, 6);
/* $ll = cons(1, cons(2, cons(3, cons(4, null)))); */


function length($list){
    $iter = function($item, $acc) use (&$iter){
        if ($item === null){
            return $acc;
        }
        /* echo $acc; */
        return $iter(cdr($item), $acc + 1);
    };
    return $iter($list, 0);
}


echo length($ll);

