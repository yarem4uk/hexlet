<?php

$arr = [2, 9, [1], [2, [4]]];


/* $result = array_reduce($arr, function($acc, $item) { */ 
/*     if (!is_array($item)) */
/*         $acc[] = $item; */
/*     return $acc; */
/* }, []); */

/* print_r($result); */

function flatten($arr) {
    $iter = function($item, $acc) use (&$iter) {
        if ($item === null)
            return $acc;
        return $iter();
    };
    return $iter($arr, []);
}
