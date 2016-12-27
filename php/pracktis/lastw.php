<?php

$str = 'hello, wOrLD!    ';


function lengthOfLastWord($str){
    $arr = explode(" ", trim($str));
    return strlen($arr[sizeof($arr) - 1]);
}

echo lengthOfLastWord($str);
