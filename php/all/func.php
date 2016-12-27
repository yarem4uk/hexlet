<?php
 
function mysum($a, $b, $func){
    if($a > $b){ return 0; }
    return $func($a) + mysum($a + 1, $b, $func);
}
$ind = function($x){ return $x; };



echo mysum(1, 5, $ind);


    
