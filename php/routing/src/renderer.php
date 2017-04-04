<?php

namespace App\Renderer;

require_once 'template.php';

function render($filepath, $params = [])
{
    $templatepath = 'resources' . DIRECTORY_SEPARATOR . 'views' . DIRECTORY_SEPARATOR . $filepath . '.phtml'; 
    return \App\Template\render($templatepath, $params);
}
