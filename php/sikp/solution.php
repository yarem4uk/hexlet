<?php

require_once 'pair.php';


$ll = makeList(1.2, 2, 3, 4, 5);

$map = function($list, $func, $acc) use (&$map){
    if($list == null){
        return reverse($acc);
    }
    return $map(cdr($list), $func, cons($func(car($list)), $acc));
}; 

$fm = function($item){
    return ceil($item);
};




/* echo listToString($map($ll, $fm, null)); */


$filter = function($list, $func, $acc) use (&$filter){

    if($list == null){
        return reverse($acc);
    }
    
    if($func(car($list))){
        $acc = cons(car($list), $acc);
        return $filter(cdr($list), $func, $acc);
    }
    
    return $filter(cdr($list), $func, $acc);
};

$ff = function($item){
   return $item % 2 === 0;
};


/* echo listToString($filter($ll, $ff, null)); */


$accumulate = function($list, $func, $acc){

    $iter = function($item, $acc) use (&$iter, $func){
        if($item == null){
            return $acc;
        }

        return $iter(cdr($item), $func(car($item), $acc));
    };
    
    return $iter($list, $acc);
};

$fa = function($item, $acc){

    return $item * $acc;
};

/* echo listToString($accumulate($ll, $fa, null)); */


$solution = function($list, $func, $f2, $f3) use ($fm, $ff, $fa){
    
   $ll = $func($list, $fm, null);
   $ll = $f2($ll, $ff, null);
   $ll = $f3($ll, $fa, 1);
   return $ll;

};

echo $solution($ll, $map, $filter, $accumulate);
