<?php 

namespace App\Renderer;

function render($filepath, $params = [])
{
    $templatepath = '/views' . DIRECTORY_SEPARATOR . $filepath . '.phtml';
    return \App\Render($templatepath, $params);
}

