<?php


function newAccount($balance, $password){
    
    $deposit = function($amount) use (&$balance){
        $balance += $amount;
        return $balance;
    };
    
    $withdrow = function($amount) use (&$balance){
        $balance -= $amount;
        return $balance;
    };

    return function($funcname, $amount, $pass) use ($deposit, $withdrow, $password){
        if($pass == $password){
            switch($funcname){
                case "deposit":
                    return $deposit($amount);
                    break;
                case "withdrow":
                    return $withdrow($amount);
                    break;
            }
        }
        return 'wrong password!';
    };
}
