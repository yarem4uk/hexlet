<?php 

function longestLength($str){
    $arr = [];
    $max = 0;
    
    for($i = 0; $i < strlen($str); $i++){
        if (in_array($str[$i], $arr)){
            $arr = array_slice($arr, array_search($str[$i], $arr) + 1);
        }
        
        $arr[] = $str[$i];
        if (sizeof($arr) > $max){
            $max = sizeof($arr);
        }
    }
    return $max;
}

$str = 'rewaassddkl';
print_r(longestLength($str));
