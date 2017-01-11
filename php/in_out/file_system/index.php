<?php

namespace App;

function rrmdir($dir) 
{
    $fold = new \RecursiveDirectoryIterator($dir, \FilesystemIterator::SKIP_DOTS);
    $iter = new \RecursiveIteratorIterator($fold, \RecursiveIteratorIterator::CHILD_FIRST);

    foreach ($iter as $file) {
        if (is_dir($file)) {
            rmdir($file);
        } else {
        unlink($file);
        }
    }
    rmdir($dir);
}


$path = '/home/alex/templ';
/* $files = array_diff(scandir($path), ['.', '..']); */
print_r(rrmdir($path));
/* rrmdir($path); */
