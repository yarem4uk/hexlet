<?php

function factor($num){
    return function($arg) use ($num){
        return $arg * $num;
    };
}
$fff = factor(5);
echo $fff(5); 
