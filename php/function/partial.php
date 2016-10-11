<?php

require 'vendor/autoload.php';

use function Functional\map;
use function Functional\partial_any;
use const Functional\…;

$list = [0, 1, -5, 9, 10];
/* $list = [-1, 1, 3, 10, 0]; */

/* $powlist = map($list, partial_any('pow', ,… 2)); */

/* print_r ($powlist); */

function mapWithPower($arr, $exp){
    return map($arr, partial_any('pow', …, $exp));
}
print_r(mapWithPower($list, 1));
