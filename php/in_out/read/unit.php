<?php

$path = './test/first.txt';

$handler = fopen($path, "rb");

if ($handler) {
    try{
        while (!feof($handler)) {
            $line = fgets($handler);
            if (preg_match('/test/', $line, $match)) {
                $arr[] = $line;
            }
        }
        
    } finally {
        fclose($handler);
    }
}

print_r($arr);

/* $str = 'test jlkj kjlkj kjlkj'; */
/* preg_match('/test/', $str, $match); */
/* print_r($match); */
