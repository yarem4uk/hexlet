<?php


function hammingWeight($num){
   $bin = decbin($num);
   $str = (string)$bin;
   $sum = 0;
   for($i = 0; $i < strlen($str); $i++)
       $sum +=(int)$str[$i];
   return $sum;   
}
echo hammingWeight(50);
