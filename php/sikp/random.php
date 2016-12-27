<?php

function random($seed){

    return function($n = null) use (&$seed){
        if(!is_null($n)){
            return $seed = null;
        }
        $a = 45;
        $c = 21;
        $m = 67;
        $seed = ($a * $seed + $c) % $m;
        return $seed;
    };
    
}
