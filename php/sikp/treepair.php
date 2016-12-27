<?php

function cons($x, $y){
    return function($method) use($x, $y) {
        switch($method){
            case "car":
                return $x;
            case "cdr":
               return $y; 
        } 
    };
}

function car($pair){
    return $pair("car");
}


function cdr($pair){
    return $pair("cdr");
}


function l()
{
    return array_reduce(array_reverse(func_get_args()), function ($acc, $item) {
        return cons($item, $acc);
    });
}


function ls($list)
{
    if (!isPair($list)) {
        return $list;
        }

    $arr = [];
    $iter = function ($items) use (&$arr, &$iter) {
        if ($items != null) {
            $arr[] = ls(car($items));
            $iter(cdr($items));
        }

    };
    $iter($list);

    return "(" . implode(", ", $arr) . ")";
}


function reverse($list){
    $rev= function($items, $acc) use (&$rev){
        if($items === null){
            return $acc;
        }
        return $rev(cdr($items), cons(car($items), $acc));
    };
    return $rev($list, null);
}



function isPair($item)
{
    return is_callable($item);
}
