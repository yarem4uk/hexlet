<?php

/* function summaryRanges($arr){ */
    
/*     echo "hellow"; */
/* } */
/* summaryRanges(1); */

function multi($first, $second){
    $r = 0;
    for($i = 0; $i < $second; $i++){
        $r += $first;
    }
    return $r;
}
echo multi(3, 5);
