<?php

namespace App;

$current = '/current/path';
$move = '/';

function cd ($current, $move)
{
    if ($move[0] == DIRECTORY_SEPARATOR) {
       return $move . PHP_EOL; 
    }

    $currentParts = explode(DIRECTORY_SEPARATOR, $current);
    $parts = explode(DIRECTORY_SEPARATOR, $move);
    $path = array_reduce($parts, function ($acc, $item) {
        /* return print_r([$acc, $item]); */
        switch ($item) {
        case '' :
        case '.' :
            return $acc;
        case '..' :
            return array_slice($acc, 0, -1);
        default:
            $acc[] = $item;
            return $acc;
        }
    }, $currentParts);
    
    /* var_dump($path); */
    return implode(DIRECTORY_SEPARATOR, $path) . PHP_EOL;
}

echo cd($current, $move);
