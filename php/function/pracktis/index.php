<?php 

$arr = [1, 2, [3], [4, [5, [6]]], 7];
/* $b = [1, 2, [5], [6], 3, 4, 9]; */

function flatten ($arr) {
    $iter = function ($item, $acc) use (&$iter) {
        array_reduce($item, function ($acc, $el) use (&$acc, &$iter) {

            if (is_array($el)) {
                 $acc = $iter($el, $acc);
            } else {
            $acc[] = $el;
            return $acc;
            }
        }, []);

        return $acc; 
    };
    return $iter($arr, []);
}

print_r(flatten($arr));
/* print_r(flatten($b)); */
