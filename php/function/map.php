<?php

$s = 'abcd';
/* print_r($m); */
/* echo ord($m[0]); */

function powerOfString($str){
    $m = str_split($str);
    $result = array_map(function($item){
        return ord($item);
    }, $m);
    return array_sum($result);
}
echo powerOfString($s);

