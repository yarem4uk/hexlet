<?php

/* $list = [1, 2, 4, 6, 3]; */
/* $list = [0, 10, 50, 100, 23, 89, 31]; */
/* $list = [1, 2, 4, 3]; */
/* $list = [2, 4, 5, 7]; */
/* $list = [2, 1, 8, 4]; */
/* $list = [3, 4, 2, 1]; */
/* $list = [255, 7, 5, 64]; */
/* $list = [5, 4, 2, 7]; */
$list = [10, 100, 50, 31, 0, 23, 89];

function sortByBinary($arr){
    usort($arr, function($left, $right){
        if (array_sum(str_split(decbin($left))) == array_sum(str_split(decbin($right))))
            return strcmp($left, $right);
        return (array_sum(str_split(decbin($left))) > array_sum(str_split(decbin($right)))) ? 1 : -1;
    });
    return $arr;
}
print_r(sortByBinary($list));

/* echo decbin(100); */
/* echo "\n"; */
/* echo decbin(50); */
