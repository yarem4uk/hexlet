<?php 

$arr = ['a', 's', 'f', 'g'];

$key = array_search('s', $arr);

print_r(array_slice($arr, $key + 1));
