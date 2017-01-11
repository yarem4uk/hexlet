<?php

namespace App;


$path = '/home/alex/templ';

function rrmdir($dir) 
{
    $fold = new \RecursiveDirectoryIterator($dir);
    
    $iter = function($fold) use (&$iter, $fold) {
        /* foreach (new \RecursiveIteratorIterator($fold) as $value) { */
        foreach ($fold as $value) {

            if(is_dir($value)) {
                var_dump($value);
                echo $value . PHP_EOL;
                /* return $iter($value); */
                /* rmdir($value); */
            }

            /* unlink($value); */
        }
    };
    return $iter($fold);
}

rrmdir($path);
