<?php


function deposit($balance)
{
    return function ($amount) use (&$balance){
        $balance -= $amount;
        if($balance >= $amount){
            return $balance;
        }
        return 'too much';
    };
} 
