<?php


function mydouble($func){
    return function($f)use ($func){
        return $func($func($f));
    };
}
