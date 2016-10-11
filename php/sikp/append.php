<?php

require_once 'pair.php';

$aaa = makelist(1, 2);
$bbb = makelist(3, 4);



function append($list1, $list2){
    if ($list1 == null){
        return $list2;
    }
    return cons(car($list1), append(cdr($list1), $list2));
}


echo ListToString(append($aaa, $bbb));


/* echo ListToString(cons(car(cdr($aaa)), $bbb)); */
