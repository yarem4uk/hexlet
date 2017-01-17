<?php

namespace App;

function hasEqualOnesCount($first, $second)
{
    $onesCount = function ($number) {
        $binary = decbin($number);
        $bitsArray = str_split(strval($binary));
        return sizeof(array_filter($bitsArray, function ($bit) {
            return $bit == "1";
        }));
    };

    return $onesCount($first) == $onesCount($second);
}

function hasEqualOnesCountWrong1($first, $second)
{
    $onesCount = function ($number) {
        $binary = decbin($number);
        $bitsArray = str_split(strval($binary));
        return sizeof(array_filter($bitsArray, function ($bit) {
            return true;
        }));
    };

    return $onesCount($first) == $onesCount($second);
}

function hasEqualOnesCountWrong2($first, $second)
{
    $onesCount = function ($number) {
        $binary = decbin($number);
        $bitsArray = str_split(strval($binary));
        return sizeof(array_filter($bitsArray, function ($bit) {
            return $bit == "1";
        }));
    };

    return $first == $second;
}

var_dump(hasEqualOnesCount(3,4));

var_dump(hasEqualOnesCountWrong1(true,true));

var_dump(hasEqualOnesCountWrong2(4,4));
