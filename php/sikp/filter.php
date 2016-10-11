<?php

require_once 'pair.php';
/* require_once 'reverse.php'; */

$ll = makeList(1, 2, 3, 4, 4);

/* $remove = function($list) use (&$remove ){ */
/*     if($list === null){ */
/*         return null; */
/*     } */
/*     if(car($list) % 2 == 0){ */
/*         return cons(car($list), $remove(cdr($list))); */
/*     } */
/*     return $remove(cdr($list)); */
/* }; */


/* $remove = function($func, $list, $acc) use (&$remove){ */
/*     if($list == null){ */
/*         return $acc; */
/*     } */
/*     if($func(car($list))){ */
/*         return $remove($func, cdr($list), cons(car($list), $acc)); */
/*     } */
/*     return $remove($func, cdr($list), $acc); */
/* }; */


function filter($list, $func){
    $iter = function($list, $acc) use (&$iter, $func){
        if($list == null){
            return $acc;
        } 
        if($func(car($list))){
            return $iter(cdr($list), cons(car($list), $acc));
        }
        return $iter(cdr($list), $acc);
    };
    return $iter($list, 0);
}

$ff = function($item){
    return 0 === $item % 2;
};



/* echo listToString(filter($ll, $ff)); */
