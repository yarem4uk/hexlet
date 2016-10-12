<?php

$arr = [2, 9, [1], [2, [4]]];


$result = array_reduce($arr, function($acc, $item) { 
    if (!is_array($item))
        $acc[] = $item;
    return $acc;
}, []);

print_r($result);
