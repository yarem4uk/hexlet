<?php

function reversInt($int){
    $arr = array_reverse(str_split((string)abs($int)));
    if ($int < 0)
        array_unshift($arr, "-");
    return ( int )(implode($arr));
}

print_r(reversInt(-123));
