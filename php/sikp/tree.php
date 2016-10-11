<?php 

require_once 'treepair.php';


$ll = l(1, 2, l(3, 4), l(7, 9));
/* $ll = l(1, 2); */

function treereverse($list){

    $iter = function($list, $acc) use (&$iter){
        if($list == null){
            return $acc;
        }
        
        if(isPair(car($list))){
            $newacc = cons(treereverse(car($list)), $acc);
        }
        else{
            $newacc = cons(car($list), $acc);
        }
        return $iter(cdr($list), $newacc);
    };

    return $iter($list, null);
}
echo ls(treereverse($ll));
