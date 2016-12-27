<?php

function isPowerOfThree($num){
    if($num == 1 || $num == 3)
        return 'true';
    for($i = 3; $i <= $num; $i*=3){
        if ($i == $num)
            return 'true';
    }
    return 'false';
}
echo isPowerOfThree(2);
