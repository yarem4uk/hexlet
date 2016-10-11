<?php 


require 'vendor/autoload.php';
require 'User.php';

use function Functional\group;
use function Functional\flatten;
/* use function User\getAge; */
/* use function User\make; */


$u1 = make(4);
$u2 = make(3);
$u3 = make(5);
$u4 = make(4);
$u5 = make(5);

$arr = [$u1, $u2, $u3, $u4, $u5,];

/* print_r($arr); */

$list = group($arr, function($user){
    return getAge($user);
});

print_r(flatten($list));

function ages($arr){
    $list = group($arr, function($user){
        return getAge($user);
    });
    return flatten($list);
}
