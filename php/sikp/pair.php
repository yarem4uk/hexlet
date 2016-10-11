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


function makeList()
{
    return array_reduce(array_reverse(func_get_args()), function ($acc, $item) {
        return cons($item, $acc);
    });
}


function listToString($list)
{
    $arr = [];
    $iter = function ($items) use (&$arr, &$iter) {
        if ($items != null) {
            $arr[] = car($items);
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


function length($list)
{
    $iter = function ($list, $acc) use (&$iter) {
        if ($list === null) {
            return $acc;
        }

        return $iter(cdr($list), $acc + 1);
    };
    return $iter($list, 0);
}
