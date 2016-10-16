<?php

/* $num = [97, 98, 88, 5]; */
/* $num = [90, 9, 5, 1, 34, 3]; */

/* $num = [54, 546, 548, 60]; */
$num = [481, 428, 385, 202, 2, 197, 106, 10];
/* $num = [1, 34, 3, 98, 9, 76, 45, 4]; */

usort($num, function($left, $right) {
    return ( (int) ((string) $left . (string) $right)) > ((int) ((string) $right . (string) $left)) ? 1 : -1;
});
print_r(array_reverse($num));
