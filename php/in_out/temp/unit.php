<?php

namespace App;

/* echo $path; */

function tmdir($func) {

    $path = sys_get_temp_dir() . DIRECTORY_SEPARATOR .  'dir';
    mkdir($path, 0700, true);
    $result = $func($path);
    return $result; 
}
