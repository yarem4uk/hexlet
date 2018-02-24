<?php

// array_map 

// as array

$arr = array_map(function ($item) {
    return $item ** 2;
}, $array);

// as map 
$arr = array_map(function ($key, $value) {
    return $key . $value;
}, array_keys($map), $map);

//array_reduce 
$result = array_reduce($array, function ($acc, $item) {
    return $item ** 2;
}, []);

foreach ($array as $key => $value) {
    $newArray[] = [$key => $value];
}
