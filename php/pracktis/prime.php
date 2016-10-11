<?php

function isPrime($num){
    if($num == 1 || !($num % 2) && $num != 2)
        return 'false';
    for($i = 3; $i <= $num / 2; $i++){
        if(!($num % $i))
            return 'false';
    }
    return 'true';   
}

echo isPrime(7);
