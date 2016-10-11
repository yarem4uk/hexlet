<?php

require_once 'pair.php';


/* $ll = makelist(1, 2, 3, 4, 5, 6, 7); */
/* $ll = makelist(1, 2); */


function reverse($list){
    $rev= function($items, $acc) use (&$rev){
        if($items === null){
            return $acc;
        }
        return $rev(cdr($items), cons(car($items), $acc));
    };
    return $rev($list, null);
}


/* echo ListToString(reverse($ll)); */
/* echo reverse($ll); */
