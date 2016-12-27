<?php



function fibo($n){
    if($n == 0)
        return 0;
    if($n == 1)
        return 1;
    $a = 0;
    $b = 1;
    $f = 0;
    $c = 2;
    
    $iter = function() use (&$n, &$iter, &$a, &$b, &$c, &$f){
        if ($c > $n)
            return $f;
        $c ++;
        $f = $a + $b;
        $a = $b;
        $b = $f;
        return $iter();
    };
    return $iter();
}
echo fibo(1);
