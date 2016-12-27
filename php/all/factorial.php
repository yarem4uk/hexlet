<?php

/* function factorial($num){ */
/* 	$iter = function ($num, $acc) use (&$iter){ */
/* 		if ($num < 2){return 1;} */
/* 		return $num * $iter($num - 1, $acc + $num); */
/* 		}; */	
/* 	return $iter($num, 1); */
/* } */

/* echo factorial(5); */
function small($num){
	$iter = function ($acc) use ($num, &$iter){	
		if ($num == $acc){return 1;}
		if ($num % $acc == 0){return $acc;}
		return $iter ($acc + 1);		
	};
	return $iter (2);
}
echo small(44);
