<?php 

function fib($num){
    if($num == 0)
        return 0;
    if($num == 1)
        return 1;
    $i = 1;
    $a = 0;
    $b = 1;
    $c = 0;
    while($i < $num){
        $c = $a + $b;
        $a = $b;
        $b = $c;
        $i++;
    }
    return $c;
}
