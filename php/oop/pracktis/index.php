<?php

$arr = [2, 9, [1], [2, [4]]];

/* $iter = function($arr, $acc) { */
/*     $item = array_shift($arr); */
/*     if ($item === null) */
/*         return $acc; */
/*     if (!is_array($item)) */
/*         $acc[] = $item; */
/*     else */ 
/*         return $iter($arr, $acc); */
/* }; */


/* print_r($iter($arr, [])); */
$ff = [];
$k = array_shift($ff);
print_r($k);
